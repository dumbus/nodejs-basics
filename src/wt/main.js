import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWorker(pathToWorker, workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(pathToWorker, { workerData });
        worker.on('message', result => {
            resolve({
                status: 'resolved',
                result
            });
        });
        worker.on('error', () => {
            resolve({
                status: 'error',
                result: null
            })
        });
    });
}

const performCalculations = async () => {
    const pathToWorker = join(__dirname, 'worker.js');
    const numberOfCores = cpus().length;

    const workerPromises = [];

    for (let i = 0; i < numberOfCores; i++) {
        const startingNumber = i + 10;
        workerPromises.push(createWorker(pathToWorker, startingNumber));
    }

    console.log(await Promise.all(workerPromises));
};

await performCalculations();
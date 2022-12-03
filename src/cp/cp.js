import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { stdin, stdout } from 'node:process';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const pathToChild = join(__dirname, 'files', 'script.js');

    const child = spawn('node', [pathToChild, ...args]);
    stdin.pipe(child.stdin);
    child.stdout.pipe(stdout);
};

// Функция, как и в условии, принимает масив аргументов args
spawnChildProcess([1, 2, 3]);
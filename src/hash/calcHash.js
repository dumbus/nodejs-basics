import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const pathToSource = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const textFromFile = await readFile(pathToSource);

    console.log(createHash('sha256').update(textFromFile).digest('hex'));
};

await calculateHash();
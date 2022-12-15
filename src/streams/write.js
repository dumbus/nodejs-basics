import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const pathToDestination = join(__dirname, 'files', 'fileToWrite.txt');

    const writeStream = createWriteStream(pathToDestination);
    stdin.pipe(writeStream);
};

await write();
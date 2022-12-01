import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const pathToSource = join(__dirname, 'files', 'fileToRead.txt');

    const readStream = createReadStream(pathToSource);
    readStream.on('data', (chunk) => {
        stdout.write(chunk + '\n');
    });
    
};

await read();
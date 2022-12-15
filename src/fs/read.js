import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { readdir, readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const pathToFolder = join(__dirname, 'files');
    const fileName = 'fileToRead.txt';
    const files = await readdir(pathToFolder);

    try {
        const isFileExists = files.includes(fileName);

        if (isFileExists) {
            const data = await readFile(join(pathToFolder, fileName), { encoding: 'utf8' });
            console.log(data);
        } else {
            throw new Error('FS operation failed');
        }
    } catch (err) {
        console.log(err);
    }
};

await read();
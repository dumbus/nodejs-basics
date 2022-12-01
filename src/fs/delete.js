import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { readdir, unlink } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const pathToFolder = join(__dirname, 'files');
    const fileName = 'fileToRemove.txt';
    const files = await readdir(pathToFolder);

    try {
        const isFileExists = files.includes(fileName);

        if (isFileExists) {
            await unlink(join(pathToFolder, fileName));
        } else {
            throw new Error('FS operation failed');
        }
    } catch (err) {
        console.log(err);
    }
};

await remove();
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { readdir, writeFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const pathToFolder = join(__dirname, 'files');
    const fileName = 'fresh.txt';
    const files = await readdir(pathToFolder);

    try {
        const isFileExists = files.includes(fileName);

        if (!isFileExists) {
            await writeFile(join(pathToFolder, fileName), 'I am fresh and young');
        } else {
            throw new Error('FS operation failed');
        }
    } catch (err) {
        console.log(err);
    }
};

await create();
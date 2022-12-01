import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { readdir } from 'node:fs/promises';
import { access } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const pathToFolder = join(__dirname, 'files');

    try {
        access(pathToFolder, async err => {
            if (err) {
                throw new Error('FS operation failed');
            } else {
                const files = await readdir(pathToFolder);
                console.log(files);
            }
        })
    } catch (err) {
        console.log(err);
    }
};

await list();
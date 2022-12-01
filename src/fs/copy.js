import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { readdir, mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const pathToSource = join(__dirname, 'files');
    const pathToDestination = join(__dirname, 'files_copy');

    const isSourceExists = existsSync(pathToSource);
    const isDestinationExists = existsSync(pathToDestination);

    try {
        if (!isSourceExists || isDestinationExists) {
            throw new Error('FS operation failed');
        } else {
            const files = await readdir(pathToSource);
            await mkdir(pathToDestination);
    
            for (const file of files) {
                await copyFile(join(pathToSource, file), join(pathToDestination, file));
            }
        }
    } catch (err) {
        console.log(err);
    }
};

copy();
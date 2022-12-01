import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { readdir} from 'node:fs/promises';
import { rename as fsRename } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const pathToFolder = join(__dirname, 'files');
    const oldName = 'wrongFilename.txt';
    const newName = 'properFilename.md';
    const files = await readdir(pathToFolder);

    try {
        const isOldFileExists = files.includes(oldName);
        const isNewFileExists = files.includes(newName);

        if (!isOldFileExists|| isNewFileExists) {
            throw new Error('FS operation failed');
        } else {
            const pathToOldFile = join(pathToFolder, oldName);
            const pathToNewFile = join(pathToFolder, newName);
            await fsRename(pathToOldFile, pathToNewFile);
        }
    } catch (err) {
        console.log(err);
    }
};

await rename();
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pipelinePromisified = promisify(pipeline);

const decompress = async () => {
    const pathToSource = join(__dirname, 'files', 'archive.gz');
    const pathToDestination = join(__dirname, 'files', 'fileToCompress.txt');

    const readStream = createReadStream(pathToSource);
    const unzipTransformStream = createGunzip();
    const writeStream = createWriteStream(pathToDestination);

    await pipelinePromisified(
        readStream,
        unzipTransformStream,
        writeStream
    ).catch((err) => {
        console.log(err);
    })
};

await decompress();
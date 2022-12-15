import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pipelinePromisified = promisify(pipeline);

const compress = async () => {
    const pathToSource = join(__dirname, 'files', 'fileToCompress.txt');
    const pathToDestination = join(__dirname, 'files', 'archive.gz');

    const readStream = createReadStream(pathToSource);
    const gzipTransformStream = createGzip();
    const writeStream = createWriteStream(pathToDestination);

    await pipelinePromisified(
        readStream,
        gzipTransformStream,
        writeStream
    ).catch((err) => {
        console.log(err);
    })
};

await compress();
import { Transform, pipeline } from 'node:stream';
import { stdin, stdout } from 'node:process';
import { promisify } from 'node:util';

const pipelinePromisified = promisify(pipeline);

const transform = async () => {
    const reversingStream = new Transform({
        transform(chunk, enc, cb) {
            const stringChunk = chunk.toString().trim();
            const reversedChunk = stringChunk.split('').reverse().join('');

            this.push(reversedChunk + '\n');

            cb();
        }
    });

    await pipelinePromisified(
        stdin,
        reversingStream,
        stdout
    ).catch(error => {
        console.log(error);
    });
};

await transform();
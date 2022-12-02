import { Transform, pipeline } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    const reversingStream = new Transform({
        transform(chunk, enc, cb) {
            const stringChunk = chunk.toString().trim();
            const reversedChunk = stringChunk.split('').reverse().join('');

            this.push(reversedChunk + '\n');

            cb();
        }
    });

    pipeline(
        stdin,
        reversingStream,
        stdout,
        error => {
            console.log(error);
        }
    );
};

await transform();
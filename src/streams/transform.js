import { Transform } from 'stream';

const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().split('').reverse().join(''));
    }
});

const transform = async () => {
    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archive = path.join(__dirname, 'files', 'archive.gz');

    const readStream = fs.createReadStream(file, 'utf-8');
    const writeStream = fs.createWriteStream(archive);

    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
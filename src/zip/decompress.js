import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archive = path.join(__dirname, 'files', 'archive.gz');

    const readStream = fs.createReadStream(archive);
    const writeStream = fs.createWriteStream(file);

    const unzip = createUnzip();

    readStream.pipe(unzip).pipe(writeStream);
}

await decompress();
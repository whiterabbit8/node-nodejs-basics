import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = path.join(__dirname, 'files', 'fileToWrite.txt');

    const writeStream = fs.createWriteStream(file);

    process.stdin.on('data', (chunk) => writeStream.write(chunk));
};

await write();
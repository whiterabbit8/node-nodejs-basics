import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = path.join(__dirname, 'files', 'fileToRead.txt');

    if (fs.existsSync(file)) {
        fs.readFile(
            file,
            'utf-8',
            (error, data) => {
                if (error) throw error;
                console.log(data);
            }
        );
    } else {
        throw new Error ('FS operation failed: fileToRead.txt does not exist');
    }
};

await read();
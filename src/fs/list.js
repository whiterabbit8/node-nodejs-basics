import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filesFolder = path.join(__dirname, 'files');

    if (fs.existsSync(filesFolder)) {
        fs.readdir(filesFolder, (error, files) => {
            if (error) throw error;
            console.log(files.join('\n'));
        });
    } else {
        throw new Error ('FS operation failed: files folder does not exist');
    }
};

await list();
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filesFolder = path.join(__dirname, 'files');
    const copyFolder = path.join(__dirname, 'files_copy');

    if (fs.existsSync(filesFolder)) {
        if (fs.existsSync(copyFolder)) {
            throw new Error ('FS operation failed: files_copy is already exist');
        } else {
            fs.cp(
                filesFolder,
                copyFolder,
                { recursive: true },
                (error) => {
                    if (error) throw error;
                }
            )
        }
    } else {
        throw new Error ('FS operation failed: files folder does not exist');
    }
};

await copy();

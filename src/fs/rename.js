import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const wrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const properFile = path.join(__dirname, 'files', 'properFilename.md');

    if (fs.existsSync(wrongFile)) {
        fs.rename(
            wrongFile,
            properFile,
            (error) => {
                if (error) throw error;
            }
        );
    } else if (fs.existsSync(properFile)) {
        throw new Error ('FS operation failed: properFilename.md is already exist');
    } else {
        throw new Error ('FS operation failed: wrongFilename.txt does not exist');
    }
};

await rename();
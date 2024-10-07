import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = path.join(__dirname, 'files', 'fileToRemove.txt');

    if (fs.existsSync(file)) {
        fs.unlink(
            file,
            (error) => {
                if (error) throw error;
            }
        );
    } else {
        throw new Error ('FS operation failed: fileToRemove.txt does not exist');
    }
};

await remove();
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileDir = path.join(__dirname, 'files', 'fresh.txt');

    if (fs.existsSync(fileDir)) {
        throw new Error ('FS operation failed: fresh.txt is already exist');
    } else {
        fs.writeFile(
            fileDir,
            'I am fresh and young',
            (error) => {
                if (error) throw error;
            }
        );
    }
}

await create();
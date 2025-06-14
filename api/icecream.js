import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === "GET") {
        const filePath = path.join(process.cwd(), 'icecreams.json');
        const data = fs.readFileSync(filePath, 'utf-8');
        const iceCreams = JSON.parse(data);
        res.status(200).json(iceCreams);
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}

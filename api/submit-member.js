// api/submit-member.js

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { nama, wa, jadwal } = req.body;

  if (!nama || !wa) {
    return res.status(400).json({ message: 'Data tidak lengkap' });
  }

  const dataLine = `${new Date().toISOString()} | ${nama} | ${wa} | ${jadwal || '-'}\n`;
  const filePath = path.join(process.cwd(), 'static', 'db_member.txt');

  try {
    fs.appendFileSync(filePath, dataLine, 'utf8');
    return res.status(200).json({ message: 'Data berhasil disimpan' });
  } catch (error) {
    console.error('Gagal menyimpan data:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}

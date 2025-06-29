import supabase from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { nama, email, nomor_hp } = req.body

  const { data, error } = await supabase
    .from('members')
    .insert([{ nama, email, nomor_hp }])

  if (error) return res.status(500).json({ error: error.message })

  res.status(200).json({ message: 'Sukses daftar member', data })
}

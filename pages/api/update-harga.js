import supabase from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { id, harga } = req.body

  const { data, error } = await supabase
    .from('harga')
    .update({ harga })
    .eq('id', id)

  if (error) return res.status(500).json({ error: error.message })

  res.status(200).json({ message: 'Harga diperbarui', data })
}

import supabase from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { member_id, tanggal_main, jam_mulai, jam_selesai } = req.body

  const { data, error } = await supabase
    .from('bookings')
    .insert([{ member_id, tanggal_main, jam_mulai, jam_selesai, status: 'pending' }])

  if (error) return res.status(500).json({ error: error.message })

  res.status(200).json({ message: 'Booking berhasil', data })
}

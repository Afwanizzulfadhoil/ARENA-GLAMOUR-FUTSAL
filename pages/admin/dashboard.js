import { useEffect, useState } from 'react'
import supabase from '../../lib/supabase'

export default function AdminDashboard() {
  const [members, setMembers] = useState([])
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data: mem } = await supabase.from('members').select('*')
      const { data: book } = await supabase.from('bookings').select('*')
      setMembers(mem)
      setBookings(book)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Data Member</h1>
      {members.map((m) => (
        <div key={m.id}>{m.nama} - {m.email}</div>
      ))}

      <h1>Data Booking</h1>
      {bookings.map((b) => (
        <div key={b.id}>{b.tanggal_main} - {b.jam_mulai} s/d {b.jam_selesai}</div>
      ))}
    </div>
  )
}

import { useState } from 'react'

export default function MemberForm() {
  const [form, setForm] = useState({ nama: '', email: '', nomor_hp: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/daftar-member', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const result = await res.json()
    alert(result.message)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nama" onChange={e => setForm({...form, nama: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input placeholder="Nomor HP" onChange={e => setForm({...form, nomor_hp: e.target.value})} />
      <button type="submit">Daftar Member</button>
    </form>
  )
}

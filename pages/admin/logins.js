import { useState } from 'react'
import { useRouter } from 'next/router'

export default function LoginAdmin() {
  const [pass, setPass] = useState('')
  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()
    if (pass === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      sessionStorage.setItem('admin', 'true')
      router.push('/admin/dashboard')
    } else {
      alert('Password salah')
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="password"
        placeholder="Masukkan password admin"
        onChange={(e) => setPass(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}

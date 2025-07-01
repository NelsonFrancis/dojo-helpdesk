import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'
import Button from './Button'

export default function Navbar({userData}) {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Dojo Helpdesk logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link className='mr-auto' href="/tickets">Tickets</Link>
      {userData && <span>Welcome {userData.email}</span>}
      <Button />
    </nav>
  )
}
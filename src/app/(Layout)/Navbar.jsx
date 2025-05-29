import Link from 'next/link'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div style={{
      overflow:'hidden',
      background:'#f5f5f5'
    }}>
  <div className='navbar_container'>
        <p>Fresco / Flavori</p>
        <div className='navbar_links_wrapper'>
            <Link href={''}>About us</Link>
            <Link href={''}>Menu</Link>
            <Link href={''}>Story</Link>
            <Link href={''}>Advantages</Link>
            <Link href={''}>Contacts</Link>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Navbar

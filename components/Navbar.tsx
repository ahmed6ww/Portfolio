

import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
    <>
      <nav className=' flex '>
        <div className='flex ml-7 '>
          <Link href='./home' className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110">
            <Image
              src='/home-logo.png'
              height={90}
              width={90}
              alt='Logo'
            /></Link>
         
        </div>

        <div className='drop-shadow-2xl flex flex-row p-4 gap-9 m-auto text-lg tracking-wider '>
          <Link href='/projects' >PROJECTS
          </Link>
          <Link href='/certifications'>CERTIFICATIONS
          </Link>
          <Link href='/about'>ABOUT
          </Link>


        </div>
      </nav>
    </>
  )
}

export default Navbar
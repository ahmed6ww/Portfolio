

import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
    <>
      <nav className=' flex  '>
        <div className='flex ml-7 '>
          <Link href='./home'>
            <Image
              src='/home-logo.png'
              height={90}
              width={90}
              alt='Logo'
            /></Link>
          <Link href='/public'></Link>
        </div>
        <div className='drop-shadow-2xl text-white flex flex-row p-4 gap-9 m-auto'>
          <Link className=' ' href='/projects'>PROJECTS
          </Link>
          <Link className='' href='/certifications'>CERTIFICATIONS
          </Link>
          <Link className='' href='/about'>ABOUT
          </Link>


        </div>
      </nav>
    </>
  )
}

export default Navbar


import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
    <>
    
      <nav className=' flex  '>
        <div className='flex ml-7 '>
          <Link href='./home' className=" relative object-cover transition-transform duration-300 ease-in-out transform hover:scale-110">
            <Image
              src='/home-logo.png'
              height={90}
              width={90}
              alt='Logo'
              className=" "
            /></Link>
         
        </div>

        <div className=' invisible xl:visible  drop-shadow-2xl flex flex-row p-4 m-auto gap-9 justify-center text-lg tracking-wider '>
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
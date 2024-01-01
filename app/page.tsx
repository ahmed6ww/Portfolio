import Image from 'next/image'
import { motion } from 'framer-motion'
// import navbar from '@/components/Navbar'

import Link from 'next/link'
export default function Home() {
  return (
    <>
      <section className='element h-full w-full' >
      <nav className=' flex '>
    <div className='flex ml-7 '>
      <Link href='/page.tsx'>
      <Image
        src='/home-logo.png'
        height={90}
        width={90}
        alt='Logo'
      /></Link>
      <Link href='/public'></Link>
    </div>
    <div className=' text-cyan-50 flex flex-row p-4 gap-9 m-auto'>
      <Link className='' href='/home'>HOME
      </Link>
      <Link className='' href='/projects'>PROJECTS
      </Link>
      <Link className='' href='/certifications'>CERTIFICATIONS
      </Link>
      <Link className='' href='/about'>ABOUT
      </Link>


    </div>
  </nav>
        
        <main className=' relative flex  h-screen flex-col justify-between sm:w-full sm:h-screen'>
          <div className=' text-white  flex items-center justify-center h-screen flex-col flex-grow'
        
          >
          
              
            <h1 className='font-extrabold text-8xl drop rad'>Ahmed</h1>
            <p className='flex justify-end w-[335px] ' >Full Stack Web Developer</p>
          </div >
          
          <div className='absolute bottom-0 left-0  mb-8 ml-10'>
             <Link href='/next.svg ' className=' e' >
              <Image
                src='/github-icon.svg'
                height={30}
                width={30}
                alt='Logo' />
            </Link>

          </div>
           
        </main>





       
         




      </section>

    </>
  )
}

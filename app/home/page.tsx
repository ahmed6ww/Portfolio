import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
  return (
    <section className='h-full w-full  ' >
      <main className=' relative flex  h-screen flex-col justify-between sm:w-full sm:h-screen'>
        <div className=' text-white  flex items-center justify-center h-screen flex-col flex-grow'
        >
          <h1 className='font-extrabold text-8xl drop-shadow-xl '>AHMED</h1>
          <p className='flex justify-end w-[335px] drop-shadow-2xl ' >Full Stack Web Developer</p>

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
  )
}

export default Home
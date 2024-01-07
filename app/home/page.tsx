'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Home = () => {
  return (
    <section className='h-full w-full relative shadow-gray-50' >




      <main className='relative flex  h-screen flex-col justify-between sm:w-full sm:h-screen '>
        <motion.div className='  flex items-center justify-center h-screen flex-col flex-grow '
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{opacity:0}}
          transition={{ duration: 1 }}
          
          >
  {/* <video src='/video3.mp4'autoPlay loop muted className=' absolute -z-1 opacity-10'/> */}
  
         
          <h1 className='font-extrabold text-[180px] drop-shadow-xl '

          >سلام</h1>
          
          
          <p className='flex justify-end w-[335px] drop-shadow-2xl ' >Full Stack Web Developer</p>
        
        </motion.div >





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
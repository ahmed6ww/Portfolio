'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'



const about = () => {
  return (<>
    <section className=''>
      <div className='relative h-screen flex flex-row  '>
        <motion.div className='absolute  md:left-40  xl:left-[950px]  xl:right-0 xl:top-[100px] p-20 '
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}

         




        >
          <Image
          src='/m6-2.svg'
          height={800}
          width={800}
          alt='Logo'
          className='rounded-[70px] blur-sm opacity-20 md:w-[800px] md:mt-24   md:opacity-sm  lg:opacity-100  lg:mt-0 xl:w-[800px]  xl:blur-0' />
          {/* <Image
            src='/about.png'

            height={600}
            width={650}
            alt='Backgrounf Image'
            className='invisible lg:visible'
          /> */}
        </motion.div>
        <div className=' relative  xl:mt-[130px] xl:ml-6'>
          <motion.h1 className='  mt-20   font-bold text-2xl md:text-3xl lg:text-4xl xl:tracking-wider  '
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 30 }}
            transition={{duration:0.8, delay:0.8}}





          >About</motion.h1>
          <motion.p className=' ml-12 mr-12 text:lg flex md:text-lg  justify-center    md:mr-[100px] lg:mr-[100px] xl:mr-[1000px] xl:text-md xl:tracking-wider xl:font-light xl:ml-[110px] mt-10 '
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >Hello! I'm Ahmed, a Full Stack Web Developer and AI enthusiast. My expertise lies in crafting seamless web solutions with a touch of creativity. Passionate about the intersection of technology and intelligence, I create cutting-edge applications. My skills extend to Graphic Design, adding a unique dimension to my work. With a holistic approach, I ensure delightful user experiences. A lifelong learner, I stay at the forefront of tech advancements, always seeking new challenges. Join me in building extraordinary projects where code meets creativity. Welcome to my digital space - a showcase of tech, design, and endless possibilities.</motion.p>








          <motion.h1 className='font-bold text-3xl mt-7 xl:mt-20 xl:tracking-wider '
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 30 }}
            transition={{ duration: 0.8, delay: 1.5 }}>
            Languages
          </motion.h1>
          <motion.div className=' mt-10 flex flex-col gap-3 ml-12 xl:text-md xl:tracking-wider xl:font-light xl:ml-[110px]'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <h4>Urdu</h4>
            <h4>English</h4>
            <h4>German</h4>
            <h4>Punjabi</h4>

          </motion.div>
        </div>







      </div>
      {/* <motion.div className='  mt-96 flex justify-center mb-32'
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src='/m6-2.svg'
          height={1200}
          width={1200}
          alt='Logo'
          className='rounded-[70px] ' />
      </motion.div> */}


    </section>

  </>
  )
}

export default about
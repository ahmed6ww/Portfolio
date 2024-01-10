
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MotionDiv, MotionH1, MotionP, MotionButton } from '@/components/MotionDiv'
import Link from 'next/link'






const about = () => {
  return (<>
    <section className='lg:w-screen flex -mt-10 2xl:-mt-0 '>
      <div className='relative h-screen flex flex-row justify-center '>
        <MotionDiv className='absolute top-40 md:left-40  lg:left-[900px] lg:top-[250px] xl: 2xl:left-[950px]  2xl:right-0 2xl:top-[100px] p-20 '
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}






        >
          <Image
            src='/m6-2.svg'
            height={1000}
            width={1000}
            alt='Logo'
            className='invisible rounded-[70px]    xl:w-[1300px] md:mt-24 md:opacity-sm lg:visible xl:visible 2xl:visible lg:w-[1700px] lg:blur-0 lg:opacity-100 lg:mr-[00px] lg:mt-0 xl:blur-0 2xl:w-[800px]  ' />
          {/* <Image
            src='/about.png'

            height={600}
            width={650}
            alt='Backgrounf Image'
            className='invisible lg:visible'
          /> */}
        </MotionDiv>
        <div className=' 2xl:mt-[50px] xl:ml-6 lg:mt-36'>
          <MotionH1 className=' mt-20 font-bold text-2xl md:text-3xl lg:text-4xl xl:tracking-wider '
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}





          >About</MotionH1>
          <MotionP className=' mt-10 ml-12 mr-6 font-light tracking-wider text-lg  md:text-xl md:mr-20 lg:text-2xl lg:left-[200px] lg:blur-0 lg:mr-[500px]  xl:font-light xl:ml-[110px]  xl:mr-[500px] 2xl:mr-[1000px]  '
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >

            Hi, I'm Ahmed, a Full Stack Web Developer and AI enthusiast. I craft seamless web solutions with a creative touch, blending technology and intelligence. Skilled in Graphic Design, I focus on delightful user experiences. Let's build extraordinary projects where code meets creativity in my digital space.</MotionP>








          <MotionH1 className='font-bold text-3xl mt-7 xl:mt-20 xl:tracking-wider '
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}>
            Languages
          </MotionH1>
          <MotionDiv className=' mt-10 flex flex-col gap-3 text-md ml-12 xl:text- xl:tracking-wider xl:font-light xl:ml-[110px] md:text-lg'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h4>Urdu</h4>
            <h4>English</h4>
            <h4>German</h4>
            <h4>Punjabi</h4>

          </MotionDiv>

          <MotionH1 className='font-bold text-3xl mt-7 xl:mt-20 xl:tracking-wider '
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          
          >
            Partners
          </MotionH1 >
          <MotionDiv 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1.2 }}
          >
            <MotionButton className='mt-12 mb-12 ml-11 md:ml-11 lg:ml-11 xl:ml-24   2xl:ml-24    '
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
              <Link href='https://muhammadammar24.vercel.app' target='_blank'>
              <Image
            src='/ammar.svg'

            height={100}
            width={55}
            alt='Image'
            className=' rounded-full 2xl:w-[70px] '
          /></Link>
          
            </MotionButton>
            <MotionButton className=' ml-10 mt-12 mb-12'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
              <Link href='' target='_blank'>
              <Image
            src='/shayan.jpg'

            height={100}
            width={55}
            alt='Image'
            className=' rounded-full  2xl:w-[70px] '
          /></Link>
          
            </MotionButton>
          </MotionDiv>
        
        
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
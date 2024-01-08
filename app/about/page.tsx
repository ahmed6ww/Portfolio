
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MotionDiv, MotionH1, MotionP } from '@/components/MotionDiv'





const about = () => {
  return (<>
    <section className='lg:w-screen flex  lg:'>
      <div className='relative h-screen flex flex-row justify-center '>
        <MotionDiv className='absolute  md:left-40   lg:left-[900px] lg:top-[250px] xl: 2xl:left-[950px]  2xl:right-0 2xl:top-[100px] p-20 '
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}

         




        >
          <Image
          src='/m6-2.svg'
          height={800}
          width={800}
          alt='Logo'
          className='invisible rounded-[70px] blur-sm opacity-20  md   md:w-[00px] md:mt-24 md:opacity-sm lg:visible 2xl:visible lg:w-[1700px] lg:blur-0 lg:opacity-100 lg:mr-[00px] lg:mt-0 xl:blur-0 2xl:w-[800px]  ' />
          {/* <Image
            src='/about.png'

            height={600}
            width={650}
            alt='Backgrounf Image'
            className='invisible lg:visible'
          /> */}
        </MotionDiv>
        <div className=' xl:mt-[130px] xl:ml-6 lg:mt-36'>
          <MotionH1 className=' mt-20 font-bold text-2xl md:text-3xl lg:text-4xl xl:tracking-wider '
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 30 }}
            transition={{duration:0.8, delay:0.8}}





          >About</MotionH1>
          <MotionP className=' mt-10 ml-12 mr-6 font-light tracking-wider text-lg  md:text-xl md:mr-20 lg:text-2xl lg:left-[200px] lg:blur-0 lg:mr-[300px]  xl:font-light xl:ml-[110px]  xl:mr-[700px] 2xl:mr-[1000px]  '
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >Hello! I'm Ahmed, a Full Stack Web Developer and AI enthusiast. My expertise lies in crafting seamless web solutions with a touch of creativity. Passionate about the intersection of technology and intelligence, I create cutting-edge applications. My skills extend to Graphic Design, adding a unique dimension to my work. With a holistic approach, I ensure delightful user experiences. A lifelong learner, I stay at the forefront of tech advancements, always seeking new challenges. Join me in building extraordinary projects where code meets creativity. Welcome to my digital space - a showcase of tech, design, and endless possibilities.</MotionP>








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
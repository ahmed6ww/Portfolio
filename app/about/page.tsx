import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <section className=''>
      <div className='relative h-screen flex flex-row  '>
        <div className='absolute   bottom-0 right-0 flex justify-end  '>
          <Image
            src='/about.png'

            height={600}
            width={650}
            alt='Backgrounf Image'
            className='invisible lg:visible'
          />
        </div>
        <div className=' absolute top-56 '>
          <h1 className=' ml-11  font-bold md:text-3xl lg:text-4xl sm:text-lg '>About</h1>
          <p className='  sm:text-sm ml-32 flex md:text-lg lg:text-lg  justify-center  items-center  sm:mr-[120px] md:mr-[120px] lg:mr-[620px] xl:mr-[720px] mt-10 mr-20 '>Hello! I'm Ahmed, a Full Stack Web Developer and AI enthusiast. My expertise lies in crafting seamless web solutions with a touch of creativity. Passionate about the intersection of technology and intelligence, I create cutting-edge applications. My skills extend to Graphic Design, adding a unique dimension to my work. With a holistic approach, I ensure delightful user experiences. A lifelong learner, I stay at the forefront of tech advancements, always seeking new challenges. Join me in building extraordinary projects where code meets creativity. Welcome to my digital space - a showcase of tech, design, and endless possibilities.</p>








          <h1 className='font-bold text-3xl mt-7 ml-11 '>
            Languages
          </h1>
          <div className=' mt-10 flex flex-col gap-3 ml-32'>
            <h4>Urdu</h4>
            <h4>English</h4>
            <h4>German</h4>
            <h4>Punjabi</h4>

          </div>
        </div>






      </div>

    </section>
  )
}

export default about
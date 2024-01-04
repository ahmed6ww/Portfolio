import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <section className=''>
      <div className='relative h-screen flex flex-row '>
        <div className='absolute   bottom-0 right-0 flex justify-end  '>
          <Image
            src='/about.png'

            height={600}
            width={650}
            alt='Backgrounf Image'
            className='invisible lg:visible '
          />
        </div>
        <div className=' absolute top-56  '>
          <h1 className='text-white ml-11  font-bold md:text-3xl lg:text-4xl sm:text-lg '>About</h1>
          <p className='  sm:text-sm ml-32 flex md:text-lg lg:text-lg  text-white justify-center items-center  sm:mr-[120px] md:mr-[120px] lg:mr-[620px] xl:mr-[720px] mt-10 mr-20 '>Greetings! I&apos;m Ahmed, a passionate Full Stack Web Developer and AI Enthusiast with a flair for creativity. My journey in the vast realm of technology has been an exciting adventure, where I&apos;ve honed my skills to craft seamless and innovative web solutions. With a keen interest in artificial intelligence, I thrive on exploring the intersection of technology and intelligence to create cutting-edge applications.
            Beyond coding, my love for Graphic Design adds a unique dimension to my skill set. I find joy in turning ideas into visually stunning creations, blending the worlds of aesthetics and functionality. This combination of technical expertise and design sensibility allows me to approach projects with a holistic perspective, ensuring a delightful user experience.
            As a lifelong learner, I am committed to staying at the forefront of technological advancements, always seeking new challenges to push the boundaries of what is possible. Join me on this journey, where code meets creativity, and let&apos;s build something extraordinary together. Welcome to my digital space - a showcase of my passion for technology, design, and the endless possibilities they offer.</p>
       






        
          <h1 className='font-bold text-3xl mt-7 text-white ml-11 '>
            Languages
          </h1>
          <div className=' text-white mt-10 flex flex-col gap-3 ml-32'>
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
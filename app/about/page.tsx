import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <section className='element'>
      <div className='relative h-screen flex flex-row '>
        <div className='absolute bottom-0 right-0 flex justify-end  '>
          <Image
            src='/about.png'

            height={600}
            width={650}
            alt='Backgrounf Image'
            className=' '
          />
        </div>
        <div className=' text-white absolute top-48 left-11 text-4xl font-bold'>
          <h1 >About</h1>
        </div>

        <div className='absolute flex top-80 text-white justify-center items-center left-24 mr-[700px]'>
          <p>Greetings! I&apos;m Ahmed, a passionate Full Stack Web Developer and AI Enthusiast with a flair for creativity. My journey in the vast realm of technology has been an exciting adventure, where I&apos;ve honed my skills to craft seamless and innovative web solutions. With a keen interest in artificial intelligence, I thrive on exploring the intersection of technology and intelligence to create cutting-edge applications.
            Beyond coding, my love for Graphic Design adds a unique dimension to my skill set. I find joy in turning ideas into visually stunning creations, blending the worlds of aesthetics and functionality. This combination of technical expertise and design sensibility allows me to approach projects with a holistic perspective, ensuring a delightful user experience.
            As a lifelong learner, I am committed to staying at the forefront of technological advancements, always seeking new challenges to push the boundaries of what is possible. Join me on this journey, where code meets creativity, and let&apos;s build something extraordinary together. Welcome to my digital space - a showcase of my passion for technology, design, and the endless possibilities they offer.</p>
        </div>
        <div className='absolute top-[70px] left-11  text-white sm:mt-[500px]'>
          <h1 className='font-bold text-3xl'>
            Languages
          </h1>
          <div className='absolute text-white mt-10 flex flex-col gap-3 left-24'>
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
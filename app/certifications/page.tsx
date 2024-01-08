"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"



const certifications = () => {
  return (
    <div className=' h-full mt-44 '
    
    >

                               {/* --------------Web Development-------------- */}

      <h1 className="flex justify-center  mt-[280px] text-6xl font-extrabold tracking-wider " >Web Development</h1>
      <motion.div className='flex justify-center gap-14 text-black  mt-32 ml-9 target '
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{duration:0.8}}
    >
        <Link href="https://coursera.org/share/2d7ddbf74d4fb84bbfcae97c43503c67" target="_blank"
          className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110">
          <Image
            src="/principles-of-ux-ui-design.svg"
            alt="pdf"
            height={420}
            width={420}
            className="rounded-2xl "
          />
          <h1 className="text-white justify-center flex mt-4 text-lg">Principles of UI/UX Design</h1>
        </Link>
        <Link href="https://coursera.org/share/ded4789af70898162b331507c1a3b722 " target="_blank"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110">
          <Image
            src="/version-control.svg"
            alt="pdf"
            height={420}
            width={420}
            className="rounded-2xl "
          />
          <h1 className="text-white justify-center flex mt-4 text-lg">Version Control</h1>
        </Link>
      </motion.div>

                              {/* --------------Programming Langauges-------------- */}              



      <motion.h1 className="flex justify-center mt-44 text-6xl font-extrabold tracking-wider" 
      
      >Programming Langauges</motion.h1>
      <motion.div className='flex justify-center gap-14 text-black  mt-32 ml-9 target '
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{duration:0.8,}}
      >
        <Link href="https://coursera.org/share/f0a0bacaf429dafe269d089a8f76996e" target="_blank"
          className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110">
          <Image
            src="/python-for-everybody.svg"
            alt="pdf"
            height={420}
            width={420}
            className="rounded-2xl "
          />
          <h1 className="text-white justify-center flex mt-4 text-lg">Python</h1>
        </Link>
        <Link href="https://coursera.org/share/169f2b2c02f37d84bf46a66d309d0b73 " target="_blank"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110">
          <Image
            src="/typeScript-tutorial.svg"
            alt="pdf"
            height={420}
            width={420}
            className="rounded-2xl "
          />
          <h1 className="text-white justify-center flex mt-4 text-lg">TypeScript</h1>
        </Link>
      </motion.div>


                              {/* --------------Programming Langauges-------------- */} 



      <h1 className="flex justify-center mt-44 text-6xl font-extrabold tracking-wider" >Artificial Intelligence</h1>
      <motion.div className='flex justify-center gap-14 text-black  mt-32 ml-9 target '
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{duration:0.8}}
        >
        <Link href="https://coursera.org/share/3e9244d99d30add06a246485192da502" target="_blank"
          className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110">
          <Image
            src="/ai-for-everyone.svg"
            alt="pdf"
            height={420}
            width={420}
            className="rounded-2xl "
          />
          <h1 className="text-white justify-center flex mt-4 text-lg">AI For Everyone</h1>
        </Link>
        <Link href=" https://coursera.org/share/4cc1c82028f243c866cf5f6b9c4792f1" target="_blank"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110 mb-11">
          <Image
            src="/generative-ai-for-everyone.svg"
            alt="pdf"
            height={420}
            width={420}
            className="rounded-2xl "
          />
          <h1 className="text-white justify-center flex mt-4 text-lg">Generative AI For Everyone</h1>
        </Link>
      </motion.div>



    </div>




  )
}

export default certifications
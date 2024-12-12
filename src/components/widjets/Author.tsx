import Image from 'next/image'
import React from 'react'
import Wrapper from '../shareable/Wrapper'

function Author() {
  return (

    <Wrapper>
    <main className='shadow-lg  bg-white rounded-lg  p-6 mt-16'>
        <div className='flex items-center'>

<Image src={'/author.jpg'} alt='Author-profile' height={200} width={200} className='rounded-full  object-cover border-2 border-red-500 mr-4'/>


<div>
<h3 className='text-xl font-bold '>Ali Akbar Brohi</h3>
<p>Web Developer | Frontend Developer| UI UX designer |Figma Template Expert |SEO Expert </p>


</div>

        </div>

        <p className='mt-4 text-black leading-relaxed'> 

Ali Akbar is an experienced web developer with a strong focus on building modern, responsive websites. Proficient in React, Next.js, and Tailwind CSS, Ali combines technical expertise with a passion for creating seamless user experiences. Whether building dynamic single-page applications or full-featured websites, Ali delivers clean, efficient, and scalable code to bring client visions to life. </p>

<div className='mt-4 flex space-x-3'>

    <a href="#" className='px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700'>

Twitter

    </a>


    <a href="#" className='px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700'>

GitHub

    </a>

    <a href="#" className='px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700'>

Linkedin

    </a>

</div>





    </main>
    </Wrapper>
  )
}

export default Author
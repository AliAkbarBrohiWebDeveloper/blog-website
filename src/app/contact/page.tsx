
import Wrapper from '@/components/shareable/Wrapper'
import React from 'react'

const page = () => {
  return (
    <Wrapper>
    <div>
        <section className='max-w-[600px] mt-12 p-2 bg-white  border-2 mx-0 md:mx-64 ' data-aos="flip-left">
        <h3 className='text-2xl font-bold '>Contact Us</h3>
<form action="">
    <input type="text" placeholder='Full Name' required className='w-[100%] mt-3 border-2 rounded-lg ' />
    <input type="email" placeholder=' Email Addreess' required  className='w-[100%] mt-3 border-2 rounded-lg'/>
    <input type="text"  placeholder='Phone Number' required className='w-[100%] mt-3 border-2 rounded-lg'/>
    <textarea name="" id="" placeholder=' Your Message' rows={5} required className='w-[100%] mt-3 border-2 rounded-lg '></textarea>
    <button type='submit' className='px-6 py-2 mt-3 bg-red-500 hover:bg-blue-500 text-white cursor-pointer w-[100%] rounded-lg hover:scale-105 duration-300 text-center'>Send Message</button>



</form>

</section>
    </div>
    </Wrapper>
  )
}

export default page
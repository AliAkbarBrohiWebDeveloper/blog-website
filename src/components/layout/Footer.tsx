import React from 'react'

function Footer() {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-3 md:text-center mt-16 bg-black text-white h-[500px] md:h-56 w-auto px-6'>
<div className='mt-3'>

<ul>


    <li className='text-2xl font-bold'>ABOUT US</li>
    <li className='mt-5'>Web Developer</li>
    <li>Frontend Developer</li>
    <li>Next js Developer</li>
</ul>


</div>
<div className='mt-3'>
<ul>
    <li className='text-2xl font-bold'>OUR SERVICES</li>
    <li className='mt-5'> Seo optimization</li>
    <li>Serveless techonolgy</li>
    <li>Headless CMS</li>
</ul>
    
</div>
<div className='mt-3'>
    <ul>
        <li className='text-2xl font-bold'>HELP</li>
        <li className='mt-5'>
Order Status</li>
<li>Delivery
</li>
<li>Returns
</li>
<li>Payment Options
</li>
    </ul>
</div>



    </footer>
  )
}

export default Footer
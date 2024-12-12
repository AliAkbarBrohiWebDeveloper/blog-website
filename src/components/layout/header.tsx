import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
  

const Header = () => {
  return (

  
<header className='flex justify-between items-center'>

<div>
<h2 className='text-3xl font-bold'>Ali Akbar Brohi Blogs</h2>

</div>
<ul >

<li className='space-x-6 text-xl font-bold hidden md:block'>
<Link href={'/'}> Home</Link>
<Link href={'/blogs'}>Blogs</Link>
<Link href={'/services'}> Services</Link>
<Link href={'/contact'}>Contact</Link>

<button className='px-5 py-2 border-2 text-black  rounded-sm active:bg-black active:text-white active:scale-105 duration-300 mt-1'>Get Satrteed</button>



</li>


</ul>


<Sheet>
  <SheetTrigger className='md:hidden'><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <li className='flex flex-col gap-y-6 text-2xl font-bold'>
<Link href={'/'}> Home</Link>
<Link href={'/blogs'}>Blogs</Link>
<Link href={'/services'}> Services</Link>
<Link href={'/contact'}>Contact</Link>





</li>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>







</header>
  )
}

export default Header
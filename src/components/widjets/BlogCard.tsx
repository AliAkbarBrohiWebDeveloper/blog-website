
import React from 'react';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';

interface BlogI {
  post: { id: string; title: string; description: string; date: string; imageUrl: string };
  isDarkbackground: boolean;
}

function BlogCard({ post, isDarkbackground }: BlogI) {
  return (
    <Card
      className={`p-4 ${isDarkbackground ? 'bg-slate-800 text-white' : 'text-slate-800'} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
    
      <Image
        src={post.imageUrl}
        alt={post.title}
        height={500}
        width={500}
        className='w-full object-cover rounded-lg'
      />
      <CardTitle className='text-xl font-normal mt-4 text-center'>{post.title}</CardTitle>
      <br />
      <CardContent className='text-center'>
        <p>{post.description}</p>
      </CardContent>
      <div className='flex flex-col items-center mt-4'>
        
        <p className={`text-sm mb-2 ${isDarkbackground ? 'text-slate-400' : 'text-slate-600'}`}>
          Published On: {new Date(post.date).toLocaleDateString()}
        </p>
        
        
        <Link
          href={`/Pages/${post.id}`}  
          className={`w-full px-6 py-3 text-white bg-blue-600 rounded text-center font-bold hover:bg-blue-500 ${isDarkbackground ? 'bg-black hover:bg-red-600' : 'bg-black hover:bg-red-600'}`}
        >
          Read more
        </Link>
      </div>
    </Card>
  );
}

export default BlogCard;

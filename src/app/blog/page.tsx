import React from 'react';

import BlogCard from '@/components/widjets/BlogCard';
import Wrapper from '@/components/shareable/Wrapper';

const posts = [
  {
    id: "1",
    title: "Html Blog of Web development",
    description: "Explore the fundamentals of Html, The backbone of every website",
    date: "2024-12-12",
    imageUrl: "/html.png"
  },
  {
    id: "2",
    title: "Css Blog of Web development",
    description: "Dive into CSS, the style sheet language that powers modern web design",
    date: "2024-12-12",
    imageUrl: "/css.png"
  },
  {
    id: "3",
    title: "Artificial Intelligence",
    description: "Exploring the World of Artificial Intelligence: Transforming the Future with Technology.",
    date: "2024-11-22",
    imageUrl: "/Ai.png"
  },
  {
    id: "4",
    title: "Agentic AI: The Next Step in Machine Learning",
    description: "Dive into the concept of agentic AI, where machines take action based on learned behavior and goals.",
    date: "2024-1-10",
    imageUrl: "/Agi.png"
  },
  {
    id: "5",
    title: "Generative AI: Creative Machines at Work",
    description: "Discover how generative AI is being used to create art, music, and even text, opening up new creative possibilities.",
    date: "2024-4-1",
    imageUrl: "/genai.png"
  },




  {
    id: "6",
    title: "Metaverse: The Next Digital Frontier",
    description: "Explore the Metaverse, an interconnected virtual world that's reshaping social interaction, work, and entertainment.",
    date: "2024-2-7",
    imageUrl: "/metaverse.png"
  },
  
  {
    id: "7",
    title: "Predictive AI: Anticipating the Future",
    description: "Learn how predictive AI is being used to forecast trends, behaviors, and future events across various industries.",
    date: "2024-8-6",
    imageUrl: "/predictive.png"
  },

  {
    id: "8",
    title: "Java Script",
    description: "Unlocking the Power of JavaScript: The Backbone of Modern Web Development.",
    date: "2024-2-9",
    imageUrl: "/java.png"
  },
  {
    id: "9",
    title: "Type Script",
    description: "TypeScript: Enhancing JavaScript with Strong Typing and Improved Development Tools.",
    date: "2024-2-9",
    imageUrl: "/type.png"
  },








];

function MegaPage() {
  return (
    <Wrapper>
    <div className="py-10">
      <h1 className="text-5xl font-bold my-8 text-red-600 text-center">Exploring the world of AI</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-20">
        {posts.map((item, index) => {
          return (
            <div key={item.id}>
              
              <BlogCard post={item} isDarkbackground={index % 2 === 0} />
            </div>
          );
        })}
      </div>
    </div>
    </Wrapper>
  );
}

export default MegaPage;


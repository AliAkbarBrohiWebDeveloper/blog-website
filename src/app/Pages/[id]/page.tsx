"use client"

import Wrapper from "@/components/shareable/Wrapper"
import Author from "@/components/widjets/Author"
import Comment from "@/components/widjets/Comment"
import Image from "next/image"
import Link from "next/link"




const details=[
{

  id:"1",
  title:"Mastring Html",
  image:"/html.png",
  description:"HTML (HyperText Markup Language) is the standard language used to create and design webpages on the internet. It provides the basic structure for web pages by using a system of tags and attributes. HTML is responsible for defining the content and layout of a page, such as headings, paragraphs, images, links, forms, and more.",
  home:"Back to Home Page"


},

{

  id:"2",
  title:"Css",
  image:"/css.png",
  description:"CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of HTML elements on a webpage. It allows web developers to separate the structure of a webpage (defined by HTML) from its visual design, making the page more flexible and easier to maintain. CSS provides a range of properties to modify various aspects of a webpage, such as colors, fonts, spacing, positioning, and responsiveness. By using CSS, developers can create aesthetically pleasing designs and ensure that web content is displayed consistently across different devices and screen sizes. The term cascading refers to the hierarchy in which multiple CSS rules can be applied, where more specific rules override general ones.",
   home:"Back to Home Page"



},

{

  id:"3",
  title:"Data Marketing",
  image:"/Ai.png",
  description:"Artificial Intelligence (AI) refers to the development of computer systems and software capable of performing tasks that typically require human intelligence. These tasks include learning from data (machine learning), recognizing speech and images, understanding natural language, making decisions, and solving complex problems. AI has a wide range of applications across various industries, such as healthcare, finance, transportation, and entertainment, enhancing efficiency, accuracy, and automation. As AI continues to evolve, it holds the potential to revolutionize industries, improve daily life, and tackle global challenges. However, it also raises ethical questions about job displacement, privacy, and the control of advanced technologies.",
   home:"Back to Home Page"


},

{

  id:"4",
  title:"Agentic Ai",
  image:"/Agi.png",
  description:"Agentic AI represents a major advancement in artificial intelligence, where machines can make decisions and take actions autonomously based on their learned experiences. Unlike traditional AI, which requires human input, agentic AI can independently navigate and adapt to complex environments. This makes it highly useful in fields like robotics, healthcare, and finance, where it can solve problems and optimize processes without constant supervision. In healthcare, agentic AI can analyze data to diagnose and suggest treatments, while in finance, it can manage investments and detect fraud. While offering vast potential, agentic AI also raises concerns about safety, accountability, and ethical implications. Its ability to learn and act autonomously makes it a powerful tool for innovation across industries..",
   home:"Back to Home Page"


},


{

  id:"5",
  title:"Agentic Ai",
  image:"/genai.png",
  description:"Generative AI refers to a class of artificial intelligence models designed to create new content, such as text, images, music, and videos, by learning patterns and structures from existing data. Unlike traditional AI, which typically classifies or analyzes data, generative AI produces original outputs that resemble the data it has been trained on. This technology powers applications like chatbots, text-to-image generators, and even deepfake creation. In industries such as entertainment, marketing, and design, generative AI is revolutionizing content creation by automating processes and offering new creative possibilities. However, it also raises concerns regarding the potential misuse of generated content, such as misinformation or copyright violations, highlighting the need for ethical guidelines and regulations. As generative AI continues to evolve, it is reshaping how we interact with technology and creating innovative ways to produce and consume digital content..",
   home:"Back to Home Page"


},




{

  id:"6",
  title:"Agentic Ai",
  image:"/metaverse.png",
  description:"The metaverse is an immersive, virtual universe that combines elements of augmented reality (AR), virtual reality (VR), and the internet to create interconnected digital environments. It enables users to interact with each other and digital objects in real time, often through avatars, across various virtual spaces. The metaverse has the potential to transform entertainment, work, education, and social interactions by providing experiences that blur the lines between the physical and digital worlds. Users can attend virtual events, shop, collaborate in virtual offices, or explore digital worlds, all from their devices. As technology advances, the metaverse is poised to reshape how we connect, create, and experience digital content, offering endless possibilities for innovation. However, it also raises important questions about privacy, data security, and the impact on mental health, as individuals increasingly engage in virtual spaces.",
   home:"Back to Home Page"


},




{

  id:"7",
  title:"Agentic Ai",
  image:"/predictive.png",
  description:"Predictive AI refers to the use of machine learning and statistical algorithms to analyze historical data and predict future outcomes or behaviors. By recognizing patterns and trends in large datasets, predictive AI can forecast everything from customer behavior and market trends to equipment failures and disease outbreaks. This type of AI is widely used across industries, including retail, healthcare, finance, and manufacturing, to enhance decision-making and improve efficiency. For example, in healthcare, predictive AI can help anticipate patient needs or identify potential health risks, while in finance, it can predict market fluctuations or credit risks. The ability to make accurate predictions enables organizations to take proactive measures, reduce risks, and optimize operations. However, challenges such as data quality, bias, and the ethical implications of relying on predictions for critical decisions remain key considerations in the development of predictive AI systems.",
   home:"Back to Home Page"


},




{

  id:"8",
  title:"Java Script",
  image:"/java.png",
  description:"JavaScript is a versatile, high-level programming language primarily used for creating interactive and dynamic content on websites. As one of the core technologies of web development, alongside HTML and CSS, JavaScript enables developers to add features like interactive forms, animations, and real-time updates to web pages. It is a client-side language, meaning it runs directly in the user's browser, allowing for faster responses and a more seamless user experience. JavaScript is also used on the server side through frameworks like Node.js, expanding its utility beyond front-end development. With its rich ecosystem of libraries and frameworks, such as React and Angular, JavaScript has become essential for building modern web applications. Its wide adoption across the tech industry ensures that mastering JavaScript is a valuable skill for developers. The language .",
   home:"Back to Home Page"


},

{

  id:"9",
  title:"Type Script",
  image:"/type.png",
  description:"TypeScript is a superset of JavaScript that introduces static typing, enabling developers to catch errors early during development. By adding type annotations and defining variables, functions, and objects with specific types, TypeScript improves code readability, maintainability, and scalability. It compiles down to plain JavaScript, ensuring compatibility with all browsers and JavaScript environments. TypeScript also provides powerful tools like autocompletion, type inference, and advanced refactoring capabilities, making it ideal for large-scale applications. Widely used in frameworks like Angular, React, and Vue, TypeScript enhances developer productivity and reduces runtime errors. The language offers strong integration with modern development environments and a growing community. As web applications become more complex, TypeScript's ability to provide structure and error prevention makes it increasingly popular among developers .",
   home:"Back to Home Page"


},



]




const IDpage = ({params}:{params:{id:string}}) => {

  const {id}=params

  const post=details.find((p)=>p.id=== id)
  if (!post){
    return(

      <h2>Post Not Found</h2>
    )
  }

  const renderParagraph=(description:string)=>{
    return(description.split("/n").map((para,index)=>(

<p key={index} className="mt-4 text-justify">

{para.trim()}

</p>

    )))
  }
  return(
    <Wrapper>
    <div>

      <h1 className="text-2xl font-bold">{post.title}</h1>

{post.image &&(

  <Image src={post.image} alt={post.title} height={500} width={500} className="w-[600px] h-auto rounded-md mt-9" />
)}
<div className="mt-8 " >
  {renderParagraph(post.description)}

  


</div>


<div className="mt-11">

<Link href="/" className="px-6 py-3 bg-teal-500 text-white mt-7">{post.home}</Link>
</div>

<Comment postid={post.id}/>
<Author/>


    </div>
    </Wrapper>
  )
}

export default IDpage
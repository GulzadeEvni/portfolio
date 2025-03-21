"use client";

import { BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";

const services = [
  {
    num: '1',
    title: 'Web Technologies',
    description: 'HTML/CSS, Vue.js, Next.js ASP.NET MVC, Postman, Flask, Django',
    href: "https://github.com/GulzadeEvni"
  },
  {
    num: '2',
    title: 'Programming Languages',
    description: 'Python, C#, Java, JavaScript',
    href: "https://github.com/GulzadeEvni"
  },
  {
    num: '3',
    title: 'AI/ML and Technologies',
    description: ' PyTorch, TensorFlow, YOLO, BERT, Stable Diffusion, Computer Vision, Machine Learning, Deep Learning, Natural Language Processing, Artificial Intelligence, Pandas, NumPy',
    href: "https://github.com/GulzadeEvni"
  },
  {
    num: '4',
    title: 'Databases',
    description: ' PostgreSQL, MySQL, Firebase',
    href: "https://github.com/GulzadeEvni"
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 xl:pl-8 xl:pr-8 pl-4 pr-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity: 0}} 
          animate={{
            opacity: 1, 
            transition:{
              delay: 2.4, 
              duration: 0.4, 
              ease: "easeIn"}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service,index)=>{
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/*top*/}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-amber-300 transition-all duration-500 flex justify-center items-center">
                    <BsArrowDownRight className="text-primary text-3xl duration-500 transition-all group-hover:-rotate-45" />
                  </Link>
                </div>
                {/*title*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-amber-300 transition-all duration-500">{service.title}</h2>
                {/*description*/}
                <p className="text-white/60">{service.description}</p>
                {/*border*/}
                <div className="border-b border-white/20 w-full"></div>
            </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

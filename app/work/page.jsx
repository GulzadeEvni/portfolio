"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '1',
    category: 'GNSS Independent Systems and Landmark Detection',
    title: 'project 1',
    description: ' Implemented deep learning models for landmark detection in satellite images. Secured 2nd place in the SAYZEK Datathon 2024, organized by the Ministry of Defense Industries.',
    stack: [{name: "Python"}, {name:"Deep Learning"}],
    image: '/assets/sayzek.png',
    live: "https://huggingface.co/Gulzd/Detectron2",
    github: "https://github.com/GulzadeEvni/SAYZEK2024_GulzadeEvni",
  },
  {
    num: '2',
    category: 'Suspicious Person and Object Recognition in Artificial Intelligence Based Smart City Systems',
    title: 'project 2',
    description: 'Supported by TÜBİTAK 2209-A and Havelsan Suite Classic Program. Detects suspicious people, behaviors and objects in real time. Detected frame is recorded with location and time information.',
    stack: [{name: "Python"}, {name:"VueJs"},{name:"Deep Learning"}, {name:"Computer Vision"}],
    image: '/assets/image.png',
    live: "",
    github: "https://github.com/orgs/AI-Teamm/repositories",
  },
  {
    num: '3',
    category: ' Bad Comment Detection with Turkish Natural Language Processing',
    title: 'project 3',
    description: ' Participated in the Teknofest 2023 Turkish Natural Language Processing Competition.',
    stack: [{name: "Python"}, {name:"NLP"}],
    image: '/assets/tekno1.png',
    live: "https://huggingface.co/TeamGZG/toxic-comment-classification-project",
    github: "https://github.com/teamgzg",
  },
  {
    num: '4',
    category: ' Entity Based Sentiment Analysis',
    title: 'project 4',
    description: ' Participated in the Teknofest 2024 Turkish Natural Language Processing Competition.',
    stack: [{name: "Python"}, {name:"NLP"}],
    image: '/assets/tekno1.png',
    live: "",
    github: "https://github.com/orgs/T-NLP/repositories",
  },
  {
    num: '5',
    category: 'Deepfake Voice Detection and Classification',
    title: 'project 5',
    description: 'Organized by AISecLab Organization.',
    stack: [{name: "Python"}, {name:"Pytorch"}],
    image: '/assets/deepfake.jpg',
    live: "",
    github: "https://github.com/GulzadeEvni/techTitan",
  },

  {
    num: '6',
    category: 'ASP.NET 8 MVC Web App',
    title: 'project 6',
    description: '',
    stack: [{name: "C#"}, {name:"MVC"},{name:"PostgreSQL"}],
    image: '/assets/asp.png',
    live: "",
    github: "https://github.com/GulzadeEvni/ASP.NET-8-MVC-Web-App",
  },
  {
    num: '7',
    category: 'OKUT Mobile App ',
    title: 'project 7',
    description: 'Card Reading Project with QR Technology',
    stack: [{name: "Java"},{name:"Android Studio"}],
    image: '/assets/okut.png',
    live: "https://drive.google.com/file/d/1R_WsU7MsvMQBBqS6Q_1OgFQYaEODiRdZ/view?usp=sharing",
    github: "https://github.com/GulzadeEvni/AndroidApp",
  },


]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex])

  }

  return (
    <motion.section 
      initial={{opacity:0}} 
      animate={{
          opacity:1, 
          transition: {delay:2.4, duration:0.4, ease: 'easeIn'},
      }} 
      className="flex flex-col justify-center py-12 xl:px-0 xl:pl-8 xl:pr-8 pl-4 pr-4 pt-7"
      >
        <div className="container mx-auto ">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/*outline num*/}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline group">{project.num}</div>
                {/*project category*/}
                <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 capitalize">{project.category} project</h2>
                {/* project description*/}
                <p className="text-white/60">{project.description}</p>
                {/*stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item,index) => {
                    return (
                      <li key={index} 
                      className="text-xl text-amber-300">
                        {item.name}
                        {/*remove last comma*/}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/*border*/}
                <div className="border border-white/20"></div>
                {/*buttons*/}
                <div className="flex items-center gap-4">
                  
                  {/*live project button*/}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-amber-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  
                  {/*github project button*/}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-amber-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
                >
                  {projects.map((project,index)=> {
                    return <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] w-[460px]  aspect-[4/3] relative group flex justify-center items-center">
                        {/*overlay*/}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/*image*/}
                        <div className="relative w-full h-full">
                          <Image 
                            src={project.image} 
                            fill 
                            className="object-cover md:object-contain bg-my-background" 
                            alt="" 
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  })}
                  {/*slider buttons*/}
                  <WorkSliderBtns 
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                    btnStyles="bg-amber-300 hover:bg-amber-300-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
                  />
              </Swiper>
            </div>
          </div>
        </div>
    </motion.section >
  )
}

export default Work
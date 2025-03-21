"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaGit,
  FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiPostgresql, SiFlask, SiTensorflow, SiScikitlearn,SiDotnet, SiMysql } from "react-icons/si";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {ScrollArea} from '@/components/ui/scroll-area';
import { motion } from "framer-motion";
import {} from "react-input-emoji";

// about data
const about = {
  title: 'About Me 👩🏻‍💻',
  description: 'A Computer Engineering graduate with experience in different fields, she loves research 👨🏻‍💻 and cats 🐈.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Gülzade Evni"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+90) 111 111 11"
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year - I'm a new graduate 😎"
    },
    {
      fieldName: "Email",
      fieldValue: "gulzadevni@gmail.com"
    },
    {
      fieldName: "Laguages",
      fieldValue: "Turkish (Native), English (Upper Intermediate)"
    },
  ]
}

//experience data
const experience = {
  icon: "",
  title: "My Experience 💼",
  description: "I have experience in different fields and programming languages.",
  items: [
    {
      company: "Turkish Revenue Administration",
      position: "Software Engineer Intern",
      duration: "07/2024 - 09/2024",
    },
    {
      company: " Ahi Evran University Information Technology Department",
      position: "Software Engineer Intern",
      duration: "02/2024 - 06/2024",
    },
    {
      company: "  ArVis Technology",
      position: " Deep tech/AI - R&D Intern",
      duration: "08/2023 - 09/2023",
    },
  ]
}

//education data
const education = {
  icon: "",
  title: "My Education 🎓",
  description: "GPA: 3.17",
  item: [
    {
      institution: "Ahi Evran University",
      degree: "Bs Degree of Computer Engineering",
      duration: "2020-2024",
    },

  ]
}

//skilss data
const skills = {
  title: "My Skills 🚀",
  description: " Programming Languages: Python, C#, JavaScript -  Web Technologies HTML/CSS, Vue.js, NextJs, ASP.NET MVC, Postman, Flask, Django -  AI/ML Frameworks and Technologies:PyTorch, TensorFlow, YOLO, BERT, Stable Diffusion, Computer Vision, Machine Learning, Deep Learning, Natural Language Processing, Artificial Intelligence, Pandas, NumPy - Databases PostgreSQL, MySQL, Firebase",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindscss",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiFlask />,
      name: "Flask",
    },
    {
      icon: <SiTensorflow />,
      name: "Tensorflow",
    },
    {
      icon: <SiScikitlearn />,
      name: "ScikitLearn",
    },
    {
      icon: <SiDotnet />,
      name: "Asp.Net",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
  ]
}

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1,transition:{delay: 2.4, duration:0.4, ease: "easeIn"}
    }}
      className="flex items-center justify-center py-12 xl:py-0 xl:pl-8 xl:pr-8 xl:pt-7"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/*content*/}

          <div className="min-h-[70vh] w-full">
            {/*experince*/}
            <TabsContent value="experience" className="w-full text-center xl:text-left  pl-4 pr-4">
              <div className="flex- flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item,index)=>{
                        return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-md flex flex-col justify-center items-center lg:items-center gap-1">
                          <span className="text-amber-300">{item.duration}</span>
                          <h3 className="text-md max-w-[260px] min-h-[60px] text-center">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-amber-300"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>

            {/*education*/}
            <TabsContent value="education" className="w-full text-center xl:text-left pl-4 pr-4">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-4 gap-4">
                        {education.item.map((item,index)=>{
                          return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-md flex flex-col justify-center items-center lg:items-center gap-1">
                            <span className="text-amber-300">{item.duration}</span>
                            <h3 className="text-md max-w-[260px] min-h-[60px] text-center">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-amber-300"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        })}
                      </ul>

                    </ScrollArea>
                  </div>
                </div>
            </TabsContent>

            {/*skills*/}
            <TabsContent value="skills" className="w-full text-center xl:text-left pl-4 pr-4 pb-4">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <ul className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                    {skills.description.split(" - ").map((text, index) => (
                      <div key={index}>
                          <li>{text}</li>
                      </div>
                    ))}
                  </ul>
                </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skills.skillsList.map((skills, index)=>{
                      return <li key={index} className="group">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[200px] h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-5xl group-hover:text-amber-300 transition-all duration-300">{skills.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
              </div>
            </TabsContent>

            {/*about me*/}
            <TabsContent value="about" className="w-full text-center xl:text-left  pl-4 pr-4">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gmax-w-[620px]">
                  {about.info.map((info,index)=>{
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-amber-300">{info.fieldName}:</span>
                      <span className="text-xl">{info.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
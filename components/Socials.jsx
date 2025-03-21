import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaKaggle} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/GulzadeEvni'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/gulzade-evni/'},
    {icon: <FaKaggle />, path: 'https://www.kaggle.com/glzadeevni'},
] 

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=> {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials
//1.00.53
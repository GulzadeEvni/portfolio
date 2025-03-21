import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"

//component
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"

const Home = () => {
  return (
    <section className="h-full xl:pl-8 xl:pr-8  pt-7">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /><span className="text-amber-300">Gülzade Evni</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              My passion for technology encourages me to constantly learn and produce innovative solutions. 
              I am always ready to explore new opportunities and contribute to the evolving world.
            </p>
            {/* btn and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-amber-300 rounded-full flex
                  justify-center items-center text-amber-300 text-base hover:bg-amber-300
                  hover:text-primary hover:transition-all duratin-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-nonen mb-8 xl:mb-0">
            <Photo  />
          </div>
        </div>
      </div>
      {/*<Stats />*/}
    </section>
  )
}

export default Home
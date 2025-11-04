import HeroImg from "../assets/hero.png";
import { Typewriter } from "react-simple-typewriter";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle: "I'm a ",
    social: {
      github: "https://github.com/mounikasrilakshmiGandham",
      //facebook: "https://www.facebook.com/charansai.gandham.1?mibextid=JRoKGi",
      linkedin:
        "https://www.linkedin.com/in/gandham-mounika-sri-lakshmi-563469257/",
    },
  };

  const roles = [
    "Machine Learning Enthusiast",
    "Web Developer",
    "Problem Solver",
  ];

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white text-6xl font-hero-font">
          Hi, <br /> I'm <span className="text-black">Gandham</span> Mounika Sri Lakshmi
          <p className="text-2xl">
            {config.subtitle}
            <span className="text-white">
              <Typewriter
                words={roles}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </h1>
        <div className="flex py-10">
          <a href={config.social.github} className="pr-5 hover:text-white">
            <AiOutlineGithub size={40} />
          </a>
          <a href={config.social.linkedin} className="hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} alt="Hero" />
    </section>
  );
}

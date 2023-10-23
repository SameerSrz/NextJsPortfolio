import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaWordpress,
  FaNodeJs,
  FaUnity,
  FaGamepad,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Circles from "../../components/Circles";
import { useState } from "react";
import Avatar from "../../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
          <FaNodeJs key="node" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="adobexd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
      {
        title: "Game Development",
        icons: [<FaUnity key="unity" />, <FaGamepad key="gamepad" />],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "experience",
    info: [
      {
        title: "Intern Game Developer - AxsisLoop",
        stage: "03-2021 - 07-2021",
      },
      {
        title: "Game Developer - HexaExpert",
        stage: "06-2022 - 09-2022",
      },
      {
        title: "Intern Software Engineer - PureLogics",
        stage: "04-2023 - 06-2023",
      },
      {
        title: "Associate Software Engineer - PureLogics",
        stage: "06-2023 - Present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "Bachelors in Software Engineering - University of Central Punjab, Lahore, Pakistan",
        stage: "2020",
      },
      {
        title: "Pre-Engineering - Garrison College for Boys, Lahore, Pakistan",
        stage: "2018 -2020",
      },
      {
        title: "SSC - Garrison Boys High School, Lahore, Pakistan",
        stage: "2018",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary py-12 md:py-20 xl:py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        {/* <Avatar/> */}
      </motion.div>
      <div className="container mx-auto flex xl:h-full pt-[110px] sm:h-[30%] flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 pt-6 md:pt-9 xl:pt-0 pb-4 md:pb-6 xl:pb-0 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-accent text-lg md:text-2xl xl:text-4xl"
          >
            MERN Stack Developer.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:block md:max-w-[500px] md:max-auto md:xl:mx-0 md:mb-4 lg:mb-6 xl:mb-12 md:px-2 xl:px-0 md:text-sm lg:text-base"

          >
            I am a skilled MERN-Stack developer with one year of experience in
            designing, developing, and deploying software applications. My
            expertise lies in front-end development , Back-end development and
            game development. I am committed to delivering value to my clients
            and users. If you are looking for a skilled developer who can
            deliver high-quality software solutions, please feel free to reach
            out to me.
          </motion.p>
          {/* Counter */}
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years Of Experience
                </div>
              </div>
              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-auto md:h-[480px] md:mb-4 lg:mb-0">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex gap-2 md:gap-4 xl:gap-8 mx-auto xl:mx-0 mb-2 md:mb-4"
          >
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                  index === itemIndex
                    ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    : ""
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </motion.div>
          {/* info */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="py-2 md:py-4 xl:py-6 flex flex-col gap-y-2 md:gap-y-4 items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

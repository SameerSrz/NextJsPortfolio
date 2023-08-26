import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'

const Work = () => {
  return (
    <div className='h-full bg-primary py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center xl:w-[30vm] flex flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 xl:mt-12'
          >
            My Work <span className='text-accent'>.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-4 max-w-[400px] mx-auto lg:mx-0'
          >
            Crafting Digital Experiences with MERN Mastery: As a dedicated MERN
            Stack developer, I specialize in weaving intricate technologies into
            seamless digital solutions.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full xl:max-w-[65%]'
        >
          {/* Slider */}
          <WorkSlider />
        </motion.div>
      </div>
    </div>
    {/* <Bulb/> */}
  </div>
  )
};

export default Work;

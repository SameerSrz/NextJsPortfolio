import { FaQuoteLeft } from 'react-icons/fa'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation ,Pagination } from 'swiper'
import Image from 'next/image'


// testimonial data
const testimonialData = [
  {
    image: '/Usman.jpeg',
    name: 'Usman Khan',
    position: 'Managing Director at HexaExperts',
    message:
      'As a member of the game development team at HexaExperts, Sameer has proven himself to be an invaluable asset to the company. His exceptional technical skills, creativity, and dedication to his work have contributed greatly to the success of our projects. I highly recommend Sameer for his exceptional skills in game development. He has proven to be a highly talented and creative developer, with a great eye for detail and an excellent understanding of game mechanics. Sameer has consistently produced high-quality games that have received critical acclaim, and he has always demonstrated a deep understanding of the gaming industry and its latest trends. He is always willing to listen to feedback and make changes as needed to ensure that the game meets or exceeds expectations. Overall, Sameer is an excellent game developer who is passionate about his work and committed to delivering top-quality games that exceed expectations. Any company would be lucky to have him on their team.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const TestimonialSlider = () => {
  return (
    <>
      <Swiper 
        spaceBetween={10}
        navigation= {true}
        pagination={{
          clickable:true,
        }}
        modules={[Navigation ,Pagination]}
        className='h-[590px]'
      >
        {
          testimonialData.map((person,index)=>{
            return (
                <SwiperSlide key={index}>
                  <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                    {/* avatar, name, position */}
                    <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                      <div className='flex flex-col justify-center text-center'>
                        {/* avatar */}
                        <div className='mb-2 mx-auto rounded-full'>
                          <Image src={person.image} width={100} height={100} alt='' className='rounded-full' />
                        </div>
                        {/* name */}
                        <div className='text-lg'>{person.name}</div>
                        {/* position */}
                        <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                      </div>
                    </div>
                    {/* quote & message */}
                    <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-800'>
                      {/* quote icon */}
                      <div className='mb-4'>
                        <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                      </div>
                      {/* message */}
                      <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                    </div>
                  </div>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  )
};

export default TestimonialSlider;

import { BsArrowRight } from 'react-icons/bs'
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Multi Vendor E-Commerce Website',
          path: '/multiVendor.png',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <>
      <Swiper 
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className='h-[280px] sm:h-[480px]'
      >
        {
          workSlides.slides.map((slide,index)=>{
            return (
              <SwiperSlide key={index}>
                <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                  {
                    slide.images.map((image,index)=>{
                      return <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                        <div className='overflow-hidden flex items-center justify-center relative group'>
                          {/* image */}
                          <Image src={image.path} width={500} height={300} alt='' />
                          {/* Overlay */}
                          <div className='absolute inset-0 bg-gradient-to-l from-transparent via[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                          {/* title */}
                          <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10'>
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              {/* title part 1 */}
                              <div className='delay-100'>Live</div>
                              {/* title part  */}
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Projects</div>
                              {/* icons */}
                              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight/></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    })
                  }
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  )
};

export default WorkSlider;

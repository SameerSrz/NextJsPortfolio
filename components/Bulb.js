import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-1 -bottom-4 rotate-5  mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[460px]">
      <Image src={'/bg-3.jpg'} width={400} height={300} className="w-full h-full" alt="" />
    </div>
  )
};

export default Bulb;

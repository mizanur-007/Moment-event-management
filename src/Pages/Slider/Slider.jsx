
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <div className="carousel w-full h-[80vh] relative">
          {/* slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/vqbdSmn/banner1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-start text-neutral-content">
    <div className="max-w-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <div  
        data-aos="slide-right"
    data-aos-offset="0"
    data-aos-delay="100"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">Cherished Moments </h1>
      <p className="mb-5 font-semibold">Turning your dreams into everlasting memories, one detail at a time. Where your love story meets our creativity, magic happens</p>
      <h1 className="inline-flex justify-center items-center gap-2"><p className="block text-xl font-bold">Get Started</p>
      <Link to="/services"><span className="text-blue-500 font-bold text-xl"><HiArrowRight/></span></Link>
      </h1>
        </div>
        <div className="p-5 md:h-48 lg:h-auto bg-white md:mt-4 lg:mt-16 hidden md:block" 
        >
          <img className="md:w-96 md:h-36 lg:w-96 lg:h-48 relative" src="/bride.jpg" alt="" data-aos="flip-up"
    data-aos-offset="-40"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"/>
          <img className="absolute max-w-36 md:top-[180px] md:left-[580px] lg:top-[340px] lg:left-[760px] md:h-44 lg:h-48" src="/couple.jpg" alt="" 
          data-aos="flip-right"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"/>
        </div>
      </div>
    </div>
  </div>
</div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-outline btn-accent">❮</a> 
            <a href="#slide2" className="btn btn-outline btn-accent">❯</a>
          </div>
        </div> 
        {/* slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/GdtB7mT/banner2.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-start text-neutral-content">
    <div className="max-w-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <div data-aos="slide-right"
    data-aos-offset="0"
    data-aos-delay="100"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold"> Tailored Birthday Experiences</h1>
      <p className="mb-5 font-semibold">Turning your dreams into unforgettable birthday adventures. In the tapestry of life, birthdays are the most vibrant threads. Because every birthday deserves a touch of magic. Creating smiles, one birthday at a time.</p>
      <h1 className="inline-flex justify-center items-center gap-2"><p className="block text-xl font-bold">Get Started</p>
      <Link to="/services"><span className="text-blue-500 font-bold text-xl"><HiArrowRight/></span></Link>
      </h1>
        </div>
        <div className="p-5 md:h-48 lg:h-auto bg-white md:mt-4 lg:mt-16  hidden md:block">
          <img className="md:w-96 md:h-36 lg:w-96 lg:h-48 relative" src="/bgirl.jpg" alt="" data-aos="flip-up"
    data-aos-offset="-40"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"/>
          <img className="absolute max-w-36 md:top-[180px] md:left-[580px] lg:top-[340px] lg:left-[760px] md:h-44 lg:h-48" src="/bgirl2.jpg" alt="" data-aos="flip-right"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"/>
        </div>
      </div>
    </div>
  </div>
</div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-outline btn-accent">❮</a> 
            <a href="#slide3" className="btn btn-outline btn-accent">❯</a>
          </div>
        </div> 
        {/* slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/9257mNn/top-view-decoration-with-gift-box-frame.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-start text-neutral-content">
    <div className="max-w-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <div data-aos="slide-right"
    data-aos-offset="0"
    data-aos-delay="100"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">Crafting Romantic Milestones </h1>
      <p className="mb-5 font-semibold">Where enduring love meets elegant celebrations. In the tapestry of life, love's anniversary is the golden thread. Marking milestones, weaving memories, and celebrating enduring love.</p>
      <h1 className="inline-flex justify-center items-center gap-2"><p className="block text-xl font-bold">Get Started</p>
      <Link to="/services"><span className="text-blue-500 font-bold text-xl"><HiArrowRight/></span></Link>
      </h1>
        </div>
        <div className="p-5 md:h-48 lg:h-auto bg-white md:mt-4 lg:mt-16  hidden md:block">
          <img className="md:w-96 md:h-36 lg:w-96 lg:h-48 relative" src="/couple2.jpg" alt="" data-aos="flip-up"
    data-aos-offset="-40"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"/>
          <img className="absolute max-w-36 md:w-32 md:top-[180px] md:left-[580px] lg:top-[340px] lg:left-[760px] md:h-44 lg:h-48" src="/couple3.jpg" alt="" data-aos="flip-right"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"/>
        </div>
      </div>
    </div>
  </div>
</div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-outline btn-accent">❮</a> 
            <a href="#slide4" className="btn btn-outline btn-accent">❯</a>
          </div>
        </div> 
        {/* slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/tbFsQfL/8683985.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-start text-neutral-content">
    <div className="max-w-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <div data-aos="slide-right"
    data-aos-offset="0"
    data-aos-delay="100"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">Tiny Toes and Rosy Cheeks</h1>
      <p className="mb-5 font-semibold">Babies are like little suns that, in a magical way, bring warmth, happiness, and light into our lives. A baby fills a place in your heart that you never knew was empty</p>
      <h1 className="inline-flex justify-center items-center gap-2"><p className="block text-xl font-bold">Get Started</p>
      <Link to="/services"><span className="text-blue-500 font-bold text-xl"><HiArrowRight/></span></Link>
      </h1>
        </div>
        <div className="p-5 md:h-48 lg:h-auto bg-white md:mt-4 lg:mt-16  hidden md:block">
          <img className="md:w-96 md:h-36 lg:w-96 lg:h-48 relative" src="/baby.jpg" alt="" data-aos="flip-up"
    data-aos-offset="-40"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"/>
          <img className="absolute max-w-36 md:w-32 md:top-[180px] md:left-[580px] lg:top-[340px] lg:left-[760px] md:h-44 lg:h-48" src="/baby2.jpg" alt="" data-aos="flip-right"
    data-aos-offset="-100"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"/>
        </div>
      </div>
    </div>
  </div>
</div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-outline btn-accent">❮</a> 
            <a href="#slide1" className="btn btn-outline btn-accent">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Slider;
import React from 'react';

const About = () => {
    return (
        <div className='my-10 mb-[1600px] md:mb-[700px] lg:mb-48'>
             <div className="hero min-h-screen rounded-lg" style={{backgroundImage: 'url(https://i.ibb.co/bmVTw79/DSC00573.jpg)'}}>
  <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
  <div className="hero-content text-start text-neutral-content">
    <div className="max-w-lg">
      <div className="flex gap-6">
        <div>
        <h1 className='text-center font-bold text-5xl logofont' data-aos="fade-up"
    data-aos-offset="-80"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">We are here to help you in Every way possible</h1>
        </div>
      </div>
    </div>
  </div>
</div>

            {/* ceo  */}
            <div className='max-h-[60vh] w-full mt-[510px] md:mt-[450px] lg:mt-24 lg:mb-16 flex flex-col lg:flex-row gap-10 justify-center items-center'>
                {/* img  */}
                <div className='h-full w-full lg:w-1/3 flex-1 flex flex-col justify-center px-6 lg:px-0 lg:pr-10' >
                    <img className='h-[500px] lg:h-[60vh] object-cover mt-5 rounded-xl' src="/ceo.JPG" alt="ceo" />
                    <h1 className='text-center mt-4 lg:mt-2 logofont text-2xl font-bold'>MD Mizanur Rahman</h1>
                    <p className='text-center'><span className='font-bold'>CEO</span>, Moments Event Management</p>
                </div>
                {/* text  */}
                <div className='flex-1 w-full px-6 lg:px-0 lg:w-2/3' data-aos="fade-up"
    data-aos-offset="20"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
                    <p  className='font-medium text-xl pr-6'>As the CEO of our esteemed event management company, I take immense pride in leading a team of passionate professionals dedicated to crafting unforgettable experiences. With a vision fueled by creativity and innovation, our company stands at the forefront of the industry, setting new standards and redefining excellence. <br /> <br /> Our company thrives on a foundation of integrity, transparency, and customer satisfaction. We value the trust our clients place in us, and we reciprocate this trust by delivering exceptional events that exceed expectations. We take the time to understand our clients' goals, preferences, and aspirations, ensuring a personalized approach that reflects their individuality.</p>
                </div>
            </div>
            {/* manager  */}
            <div className='max-h-[60vh] w-full mt-[890px] md:mt-[700px] lg:mt-36 lg:mb-16 flex flex-col lg:flex-row gap-10 justify-center items-center'>
                {/* img  */}
                <div className='h-full w-full lg:w-1/3 flex-1 flex flex-col justify-center px-6 lg:px-0 lg:pr-10'>
                    <img className='h-[350px] lg:h-[60vh] object-cover mt-5 rounded-xl' src="/manager.jpg" alt="ceo" />
                    <h1 className='text-center logofont mt-2 text-2xl font-bold'>MD Hasifur Rahman</h1>
                    <p className='text-center'><span className='font-bold'>Manager</span>, Moments Event Management</p>
                </div>
                {/* text  */}
                <div className='flex-1 w-full px-6 lg:px-0 lg:w-2/3' data-aos="fade-up"
    data-aos-offset="20"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
                    <p  className='font-medium text-xl pr-6'>I am privileged to serve as the Manager of our esteemed event management company, where creativity meets seamless execution, and dreams transform into extraordinary experiences. With a dedicated team of professionals, we take pride in orchestrating events that are not just occasions but cherished memories. <br /> <br /> At our company, we prioritize our clients above all else. Understanding that each event is unique, we tailor our services ensuring every expectation is not just met but exceeded. We invest time in comprehending our clients' visions, aspirations, and goals, enabling us to curate events that resonate profoundly with their objectives.</p>
                </div>
            </div>

            {/* other members  */}
            <div className='mt-[430px] md:mt-[330px] lg:mt-24 h-96'>
                <h1 className='text-3xl pl-6 lg:pl-0 lg:text-2xl font-bold logofont mb-6'>Meet our Other Team Members</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 lg:px-0 items-center justify-center'>
                
                {/* card 1 */}
                <div>
                <div className="h-96 rounded-xl" style={{ backgroundImage: `url(https://i.ibb.co/VLFt4C4/rsz-img-20221103-171508-488.jpg)` }} data-aos="zoom-in"
    data-aos-offset="0"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
            </div>
            <h1 className='font-bold text-2xl logofont text-center mt-2'>Sayeda Lamia</h1>
            <p className='text-center text-xl mt-1'>Event Coordinator</p>
                </div>
                {/* card 2 */}
                <div>
                <div className="h-96 rounded-xl" style={{ backgroundImage: `url(https://i.ibb.co/0DJQ5Ck/rsz-img-20211031-160216.jpg)` }} data-aos="fade-top"
    data-aos-offset="0"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
            </div>
            <h1 className='font-bold text-2xl logofont text-center mt-2'>Tasnim Priti</h1>
            <p className='text-center text-xl mt-1'>Event Designer</p>
                </div>
                {/* card 3 */}
                <div>
                <div className="h-96" style={{ backgroundImage: `url(https://i.ibb.co/0FTY4sM/rsz-1img-20211006-153035.jpg)` }} data-aos="zoom-in"
    data-aos-offset="0"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
            </div>
            <h1 className='font-bold text-2xl logofont text-center mt-2'>Abdullah Shakib</h1>
            <p className='text-center text-xl mt-1'> Venue Coordinator</p>
                </div>
                {/* card 4 */}
                <div>
                <div className="h-96" style={{ backgroundImage: `url(https://i.ibb.co/FgqQfFh/rsz-img-20220809-165611.jpg)` }} data-aos="zoom-in"
    data-aos-offset="20"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
            </div>
            <h1 className='font-bold text-2xl logofont text-center mt-2'>Sumaiya Nishat</h1>
            <p className='text-center text-xl mt-1'>Catering Manager</p>
                </div>

        </div>
      </div>
            </div>
            
    );
};

export default About;
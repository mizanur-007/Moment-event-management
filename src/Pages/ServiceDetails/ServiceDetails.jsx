import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [service, setService] = useState({
        services: [],
        packages: {
          silver: null,
          gold: null,
          platinum: null,
        },
      });
       
    const { id } = useParams();
    const allService = useLoaderData() || [];
    
    useEffect(() => {
        const data = allService.find(item => item.id === Number(id));
        setService(data || {}); 
    }, [id,allService]);

    const { services, packages } = service;
    const {silver, gold, platinum} = packages;

    return (
        <>
            <div className='mb-8'>
                <h1 className='text-center font-bold text-2xl my-6 logofont'>{service.title}</h1>
                <div className='w-full flex flex-col lg:flex-row justify-center lg:gap-4 px-2 lg:px-0'>
                    <div className='md:w-full lg:w-1/3'>
                        <img className='w-full' src={service.image} alt="" />
                    </div>
                    <div className='md:w-full mt-6 lg:mt-0 lg:w-2/3'>
                        <p className='font-medium text-xl'>{service.detailed_information}</p>
                        <h1 className='font-bold my-2 text-xl'>Package Includes:</h1>
                        <ul className='list-disc space-y-2 font-medium text-lg ml-4'>
                            {services.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                {/* package  */}
                <div className='mt-12 px-4 md:px-0'>
                    <h1 className='mb-4 lg:-mb-8 font-bold text-3xl md:text-5xl lg:text-4xl logofont text-center lg:text-left'>Deals For You</h1>
                    <div className='flex flex-col lg:flex-row items-center  gap-4 justify-between'>
                    <div>
                     <div>
                        <img className='lg:max-h-[200px] w-[700px] rounded-lg' src="/gold.PNG" alt="" />
                     </div>
                     {
                        gold &&
                        <div>
                        <h1 className='font-bold text-2xl md:text-4xl lg:text-3xl my-4'>Price: {gold.price}</h1>
                        <h1 className='font-semibold text-xl md:text-2xl lg:text-xl mb-2'>Gold Package Includes:</h1>
                        <ol className='list-disc ml-4 text-lg md:text-xl lg:text-lg'>
                            <li><span className='font-bold'>Venue</span>: {gold.venue}</li>
                            <li><span className='font-bold'>Decoration</span>: {gold.decoration}</li>
                            <li><span className='font-bold'>Catering</span>: {gold.catering}</li>
                            <li><span className='font-bold'>Senior Photographer</span> : {gold.senior_photographers}</li>
                            <li><span className='font-bold'>Assistant Photographer</span> : {gold.assistant_photographers}</li>
                            <li><span className='font-bold'>Cinematographer</span>: {gold.cinematographers}</li>
                            <li><span className='font-bold'>Makeup</span>: {gold.makeup}</li>
                        </ol>
                     </div>
                     }
                    </div>

                    <div className=' bg-[#edeed3] p-4 rounded-lg my-8'>
                    <div>
                        <img  className='lg:max-h-[200px] w-[700px] rounded-lg' src="/platinum.png" alt="" />
                     </div>
                    {
                        platinum && 
                        <div>
                        <h1 className='font-bold text-2xl md:text-4xl lg:text-3xl my-4'>Price: {platinum.price}</h1>
                        <h1 className='font-semibold text-xl md:text-2xl lg:text-xl mb-2'>Platinum Package Includes:</h1>
                        <ol className='list-disc ml-4 text-lg md:text-xl lg:text-lg'>
                            <li><span className='font-bold'>Venue</span>: {platinum.venue}</li>
                            <li><span className='font-bold'>Decoration</span>: {platinum.decoration}</li>
                            <li><span className='font-bold'>Catering</span>: {platinum.catering}</li>
                            <li><span className='font-bold'>Senior Photographer</span> : {platinum.senior_photographers}</li>
                            <li><span className='font-bold'>Assistant Photographer</span> : {platinum.assistant_photographers}</li>
                            <li><span className='font-bold'>Cinematographer</span>: {platinum.cinematographers}</li>
                            <li><span className='font-bold'>Makeup</span>: {platinum.makeup}</li>
                        </ol>
                     </div>
                    }
                    </div>

                    <div className=''>
                    <div>
                        <img  className='lg:max-h-[200px] w-[700px] rounded-lg' src="/silver.png" alt="" />
                     </div>
                    {
                        silver &&
                        <div>
                        <h1 className='font-bold text-2xl md:text-4xl lg:text-3xl my-4'>Price: {silver.price}</h1>
                        <h1 className='font-semibold text-xl md:text-2xl lg:text-xl mb-2'>Silver Package Includes:</h1>
                        <ol className='list-disc ml-4 text-lg md:text-xl lg:text-lg'>
                            <li><span className='font-bold'>Venue</span>: {silver.venue}</li>
                            <li><span className='font-bold'>Decoration</span>: {silver.decoration}</li>
                            <li><span className='font-bold'>Catering</span>: {silver.catering}</li>
                            <li><span className='font-bold'>Senior Photographer</span> : {silver.senior_photographers}</li>
                            <li><span className='font-bold'>Assistant Photographer</span> : {silver.assistant_photographers}</li>
                            <li><span className='font-bold'>Cinematographer</span>: {silver.cinematographers}</li>
                            <li><span className='font-bold'>Makeup</span>: {silver.makeup}</li>
                        </ol>
                     </div>
                    }
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;

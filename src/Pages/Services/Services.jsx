import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const data = useLoaderData()||[];
    return (
        <>
        <div className='md:mt-0 px-3 md:px-3 lg:px-0 lg:mt-5 mb-3'>

            <h1 className='text-3xl logofont font-bold'>Our Services</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 px-3 md:px-3 lg:px-0'>
            {
                data.map(plan=> <Service key={plan.id} plan={plan}></Service>)
            }
        </div>
        </>
    );
};

export default Services;
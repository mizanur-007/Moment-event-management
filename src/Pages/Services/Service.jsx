import { HiArrowRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Service = ({ plan }) => {
  const {id} = plan;
  return (
    <>
      <div
        className="h-96 transition-transform transform hover:scale-105"
        style={{ backgroundImage: `url(${plan.image})` }} data-aos="fade-right"
        data-aos-offset="20"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="hero-overlay bg-opacity-40 hover:bg-opacity-70">
        <div className="pt-[240px] px-4 text-white text-center pb-4">
            <h1 className="font-bold text-xl mb-1">{plan.title}</h1>
            <p className="font-medium text-lg">{plan.short_description}</p>
            <p className="font-semibold text-lg my-1">Price: {plan.price}</p>
            <Link to={`/details/${id}`}><button  className="font-bold text-2xl z-0"><HiArrowRight/></button></Link>
            </div>
        </div>

      </div>
    </>
  );
};

export default Service;


import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import Reviews from '../Review/Reviews';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import Provides from '../Provides/Provides';
import { useLocation } from 'react-router-dom';


const Home = () => {
    const{reviews} = useContext(AuthContext);
    const location = useLocation();
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Reviews reviews={reviews}></Reviews>
            <Provides></Provides>
        </div>
    );
};

export default Home;
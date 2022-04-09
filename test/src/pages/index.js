import React , {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import News from '../components/News';
import Footer from '../components/Footer';

import TrailerSection from '../components/Trailer';
import RoadmapSection from '../components/RoadmapSection';
import BackerSection from '../components/Backer';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
           <Sidebar isOpen={isOpen} toggle= {toggle}/>
           <Navbar toggle={toggle}/>
           <TrailerSection/>
           <HeroSection/>
           <RoadmapSection/>
           {/*<InfoSection {...homeObjOne} />*/}
           <News/>
           {/*<BackerSection/>*/}
           <Footer/>
        </>
    )
};

export default Home;

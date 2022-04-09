import React, {useState} from 'react';
import Video from '../../videos/flower.mp4';
import {HeroContainer, HeroBg,VideoBg, HeroContent,HeroBtnWrapper, HeroH1, HeroP,ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElement';

import { ServicesCard, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper} from '../News/ServicesElements';
import Ryan from '../../images/ryan.png';
import Emma from '../../images/emma.png';
import { faTwitter , faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover);
    }
    return (
        <HeroContainer id="team">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent >
                <HeroH1>Our Team</HeroH1>
                <HeroP>
                    The team always plays an important role in the success of a project
                </HeroP>
                <HeroP>
                    As a team, we have been working with each other for more than 5 years, with everyone being highly experienced in their own expertise
                </HeroP>
                <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Ryan}/>
                    <ServicesH2>Ryan Gosling</ServicesH2>
                    <ServicesP> 
                        <FontAwesomeIcon icon={faTwitter} size="2x" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" ></FontAwesomeIcon>
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Emma}/>
                    <ServicesH2>Emma Watson</ServicesH2>
                    <ServicesP>
                        <FontAwesomeIcon icon={faTwitter} size="2x" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" ></FontAwesomeIcon>
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Ryan}/>
                    <ServicesH2>Ryan Gosling</ServicesH2>
                    <ServicesP> 
                        <FontAwesomeIcon icon={faTwitter} size="2x" ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" ></FontAwesomeIcon>
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
                <HeroBtnWrapper>
                    <Button to="signup"
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            primary ="true"
                            dark ="true">
                            Get Started See more {hover ? <ArrowForward/>: <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

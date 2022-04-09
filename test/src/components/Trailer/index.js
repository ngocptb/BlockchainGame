import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg,VideoBg, HeroContent,HeroBtnWrapper, HeroH1, HeroP,ArrowForward, ArrowRight} from './TrailerElement';
import {Button} from '../ButtonElement';
import VideoPlayer from 'react-video-js-player';
import '../../videos/Video.css';
import Game from '../../videos/game.mp4';

const TrailerSection = () => {
    const videoSrc = Game;
    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover);
    }
    return (
        <HeroContainer id="">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent >
                <HeroH1>Game Trailer</HeroH1>
                <VideoPlayer src ={videoSrc} width="720" height= "420"/>
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

export default TrailerSection

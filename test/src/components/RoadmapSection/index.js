import React from 'react';
import Roadmap from '../../images/roadmap.png';
import { RoadContainer } from './RoadmapElement';

const RoadmapSection = () => {
    return (
        <RoadContainer id="roadmap">
            <img src={Roadmap} alt=""  style={{height: 600, width: "100%"}}/>
        </RoadContainer>
    )
}

export default RoadmapSection

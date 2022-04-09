import React from 'react';
import {BackerContainer, BackerHeader, BackerInfo, BackerImg, BackerItem, BackerItemLeft} from './BackerElements';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";


import img1 from '../../images/kyros.png';
import img2 from '../../images/axia.png';
import img3 from '../../images/nike.png';
import img4 from '../../images/spark.png';
import img5 from '../../images/clover.png';
import img6 from '../../images/capital.png';

const BackerSection = () => {
    return (
        <BackerContainer id="backer">
            <BackerHeader>
                <BackerInfo>
                    Developed By 
                </BackerInfo>
                <BackerInfo>
                    <FontAwesomeIcon icon={faGamepad} size="5x" ></FontAwesomeIcon>
                </BackerInfo>
                <BackerInfo>
                    PANDORAE GAMES
                </BackerInfo>
                <BackerInfo>
                    INVESTORS & BACKERS 
                </BackerInfo>
            </BackerHeader>
            <BackerImg>
                <BackerItem><img src={img1} width="100px" height="50px"/></BackerItem>
                <BackerItem><img src={img2} width="100px" height="50px"/></BackerItem>
                <BackerItem><img src={img2} width="100px" height="50px"/></BackerItem>
                <BackerItem><img src={img4} width="110px" height="70px"/></BackerItem>
                <BackerItem><img src={img5} width="110px" height="70px"/></BackerItem>
                
            </BackerImg>
            <BackerImg>
                <BackerItem><img src={img3} width="100px" height="50px"/></BackerItem>
                <BackerItem><img src={img6} width="130px" height="70px"/></BackerItem>
            </BackerImg>
        </BackerContainer>
    )
}

export default BackerSection

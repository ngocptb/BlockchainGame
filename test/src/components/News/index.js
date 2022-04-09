import React from 'react';
import Icon1 from '../../images/news1.png';
import {ServicesContainer, ServicesH1, ServicesCard, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper} from './ServicesElements';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation]);

const data = [
    {
        id: 1,
        content: 'Blockchain card game with ...',
        date: 'Oct 10, 2021'
    },
    {
        id: 2,
        content: 'Duelist King is a New NPT',
        date: 'Nov 10, 2021'
    },
    {
        id: 3,
        content: 'Ama Recap: DuelistKing X ',
        date: 'Dec 10, 2021'
    },
    {
        id: 4,
        content: 'Win 1 of 10 Limited edition',
        date: 'Jan 13, 2021'
    },
    {
        id: 5,
        content: 'Plant and zombie are waiting',
        date: 'Mar 13, 2021'
    },
    {
        id: 6,
        content: 'Horrible game is bad KJG',
        date: 'Apr 13, 2021'
    }
]

const News = () => {
    return (
        <>
        <ServicesH1>News</ServicesH1>
        <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        id="news"
        >
    
            {data.map(post =>(  
                <SwiperSlide key ={post.id} >
                    <ServicesContainer>
                        
                        <ServicesWrapper>
                            <ServicesCard>
                            <div className="">
                            <img src ={Icon1} alt="" width="150px"/>
                            </div>
                            <ServicesH2>{post.content}</ServicesH2>
                            <ServicesP><i>{post.date}</i></ServicesP>
                            </ServicesCard>
                        </ServicesWrapper>
                    </ServicesContainer> 
                </SwiperSlide>
            
        ))}
        </Swiper>
    
        </>
    )
}

export default News

/* 

        <ServicesContainer >
            <ServicesH1>News</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Blockchain card game with</ServicesH2>
                    <ServicesP>Oct 10, 2020</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Duelist King is a New NPT</ServicesH2>
                    <ServicesP>Nov 13, 2021</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Horrible Game</ServicesH2>
                    <ServicesP>Dec 05, 2019</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
 */
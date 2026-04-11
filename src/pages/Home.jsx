import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Mousewheel, Pagination } from 'swiper/modules';
  
import { championsData } from '../assets/dummy';

import {
    Champion,
    Welcome,
    ChampionDetail,
    Trailer,
    Credit
} from '../components/home-section'


const Home = () => {
    return (
        <div>
            <Swiper
                direction='vertical'
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                pagination={{ clickable: true }}
                effect='fade'
                speed={1000}
                modules={[Mousewheel, Pagination, EffectFade]}
            // modern registration
            >
                <SwiperSlide>
                    {
                        ({ isActive }) => <Welcome isActive={isActive} />
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        ({ isActive }) => <Champion isActive={isActive} />
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        ({ isActive }) => <Trailer isActive={isActive} />
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        ({ isActive }) => <Credit isActive={isActive} />
                    }
                </SwiperSlide>
            </Swiper>

            {
                championsData.map((item, idx) => {
                    return (
                        <ChampionDetail
                            key={idx}
                            item={item}
                            id={idx}
                        />
                    )
                })
            }

            <div className="scroll">
                <span>Scroll to see effect</span>
            </div>

            {/* <div style={{ height: '100vh' }}></div> */}
        </div>
    )
}

export default Home

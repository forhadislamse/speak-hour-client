import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const PopularInstructor = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('/classes.json')
            .then(res => res.json())
            .then(data => {
                const popularInstructor = [...data].sort((a, b) => b.instructors[0].no_of_classes_by_instructor - a.instructors[0].no_of_classes_by_instructor);
                // console.log(popularClasses);
                setClasses(popularInstructor)
            })
    }, [])
    return (
        <div>
            <SectionTitle heading='Popular Instructors'></SectionTitle>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    classes.slice(0, 6).map(item => <SwiperSlide className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        key={item._id}
                    >
                        <div >
                            <img src={item.instructors[0].instructor_img} alt="" />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default PopularInstructor;
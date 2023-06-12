import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import ClassItem from "../../Shared/ClassItem/ClassItem";


const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                const popularClasses = [...data].sort((a, b) => b.enrolled_student - a.enrolled_student);
                console.log(popularClasses);
                setClasses(popularClasses)
            })
    }, [])

    return (
        <div>
            <SectionTitle
                heading='Popular Classes' >
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    classes.slice(0, 6).map(item => <ClassItem
                        key={item._id}
                        item={item}
                    >
                    </ClassItem>)
                }
            </div>


        </div>
    );
};

export default PopularClasses;
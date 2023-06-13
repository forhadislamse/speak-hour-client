
const InstructorItem = ({ item }) => {

    return (
        // <div className="card w-48 md:w-1/2 bg-red-200 mx-auto">
        //     <img src={item.instructors[0].instructor_img} alt="" />
        // </div>
        <div className="card lg:card-side bg-red-200 w-48 md:w-full mx-auto">
            <img src={item.instructors[0].instructor_img} alt="" />
            <div className="card-body">
                <h2 className="card-title">{item.instructors[0].instructor_name}</h2>
                <p >Total Classes: {item.instructors[0].no_of_classes_by_instructor}</p>
            </div>
        </div>
    );
};

export default InstructorItem;
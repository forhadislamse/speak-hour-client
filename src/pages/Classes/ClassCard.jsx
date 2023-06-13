
const ClassCard = ({ item }) => {
    const { image, course_name, available_seats, instructors, course_price } = item;
    return (
        <div className="card lg:card-side bg-red-200 w-full mx-auto mt-8">
            <img className="w-48 h-60 rounded" src={image} alt="instructor_image" />
            <div className="card-body">
                <h2 className="card-title">{course_name}</h2>
                <p >Instructor: {instructors[0].instructor_name}</p>
                <p >Available Seats: {available_seats}</p>
                <p >Course Price: {course_price}</p>
                <div className="card-actions ">
                    <button className="text-white btn btn-error">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
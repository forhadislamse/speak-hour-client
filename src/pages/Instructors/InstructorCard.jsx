
const InstructorCard = ({ item }) => {

    return (
        <div>
            <div className="card lg:card-side  bg-red-200  md:w-full mx-auto mt-8">
                <img className="w-48 h-60 rounded" src={item.instructors[0].instructor_img} alt="instructor_image" />
                <div className="card-body">
                    <h2 className="card-title">{item.instructors[0].instructor_name}</h2>
                    <p >Email: {item.instructors[0].instructor_email}</p>
                    <p >Total Classes: {item.instructors[0].no_of_classes_by_instructor}</p>
                    <div className="card-actions justify-end">
                        <button className="text-white btn btn-error">See Classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;
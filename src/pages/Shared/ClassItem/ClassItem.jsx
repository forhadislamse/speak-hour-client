
const ClassItem = ({ item }) => {
    // console.log(item);
    const { course_name, image } = item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{course_name}</h2>
            </div>
        </div>
    );
};

export default ClassItem;
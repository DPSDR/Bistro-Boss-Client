
const RecommendItems = ({ item }) => {
    const { name, img, description } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <img className="object-cover" src={img} alt="Shoes" />
            <div className="card-body text-center bg-slate-400 bg-opacity-30">
                <h2 className="text-2xl text-center font-bold">{name}</h2>
                <p className=" font-medium">{description}</p>
                <div className="card-actions justify-center ">
                    <button className="btn text-orange-500  text-xl uppercase ">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default RecommendItems;
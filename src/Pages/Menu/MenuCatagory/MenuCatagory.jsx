import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCatagory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 mb-5 text-xl">Order Your Favourite Food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCatagory;
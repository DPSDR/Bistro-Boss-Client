import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [refetch, isLoading] = useCart()
    const location = useLocation();
    const navigate = useNavigate();

    const cartItem = { menuItem: _id, name, image, recipe, price, email: user?.email };
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem)
    }

    const handleAddToCart = item => {
        if (user && user?.email) {
            fetch('http://localhost:5000/carts', requestOptions)
                .then(res => res.json())
                .then(data => {
                    {
                        data.insertedId ? isLoading() : refetch()
                    }
                    if (data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please login to order food",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold text-gray-500 text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mb-5 text-xl mx-auto">Order Food</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
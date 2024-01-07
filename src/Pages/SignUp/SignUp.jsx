import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import HelmetTitle from "../../components/HelmetTitle.jsx/HelmetTitle";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = data => {
        createUser(data.name, data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name)
                    .then(() => {
                        console.log("User profile updated")
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <HelmetTitle title={"SignUp"}></HelmetTitle>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="Name" className="input input-bordered" />
                                {errors.name?.type === "required" && <p className="text-red-600">Name is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email?.type === "required" && <p className="text-red-600">Email is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
                                })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === "minLength" && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === "maxLength" && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === "pattern" && <p className="text-red-600">Password must contain special characters</p>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <p><small>Already Registered?</small> <Link to="/login">Go to login</Link> </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
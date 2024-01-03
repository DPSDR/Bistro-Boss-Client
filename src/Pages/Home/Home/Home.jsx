import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Intro from "../Intro/Intro";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommend from "../Recommend/Recommend";
import Testimonials from "../Testimonials/Testimonials";
import HelmetTitle from "../../../components/HelmetTitle.jsx/HelmetTitle";

const Home = () => {
    return (
        <div>
            <HelmetTitle title={"Home"}></HelmetTitle>
            <Banner></Banner>
            <Catagory></Catagory>
            <Intro></Intro>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recommend></Recommend>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
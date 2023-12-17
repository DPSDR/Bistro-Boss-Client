import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={"Check It Out"}
                heading={"Featured Item"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-8">
                    <p>Aug 03, 2041</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum nobis amet eos iusto laboriosam asperiores, omnis, ducimus ut et quam voluptate ipsa sapiente voluptas id quis sit unde earum non cumque nostrum deserunt. Quidem, porro! Ipsum qui numquam sint odit laborum incidunt sequi, quaerat atque obcaecati corrupti molestiae enim.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-6">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
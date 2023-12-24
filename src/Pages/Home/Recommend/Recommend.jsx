import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import RecommendItems from "../RecommendItems/RecommendItems";

const Recommend = () => {

    const slide = [
        {
            'id': '01',
            'img': slide1,
            'name': "Caeser Salad",
            'description': 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'
        },
        {
            'id': '02',
            'img': slide2,
            'name': "Caeser Salad",
            'description': 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'
        },
        {
            'id': '03',
            'img': slide3,
            'name': "Caeser Salad",
            'description': 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.'
        },
    ];

    return (
        <>
            <SectionTitle
                subHeading={"Should Try"}
                heading={"chef recommends"}
            ></SectionTitle>
            <div className="grid md:grid-cols-3 ">
                {
                    slide.map(item => <RecommendItems
                        key={item.id}
                        item={item}
                    ></RecommendItems>)
                }
            </div>
        </>
    );
};

export default Recommend;
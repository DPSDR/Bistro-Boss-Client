import "./intro.css"

const Intro = () => {
    return (
        <section className="intro-bg bg-no-repeat bg-center bg-cover bg-fixed md:h-96 sm:h-screen">
            <div className="flex justify-center items-center">
                <div className="relative">
                    <div className="bg-white p-8 mt-24 mx-16 rounded-lg text-center">
                        <h1 className="text-4xl mb-5">Bistro Boss</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse doloremque nam quibusdam, illum ea tenetur fugiat, labore voluptas temporibus nostrum aut officiis sit. Exercitationem at quaerat, sint velit impedit obcaecati voluptatem ab ratione aspernatur dolorem illo facere minus! Doloremque aliquid quibusdam optio, tempore perferendis saepe consequatur ab at quae illum.</p>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Intro;
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import Widget from '../components/layouts/Widget';  
import Pagination from "../components/Pagination";
import Breadcumb from "../components/Breadcumb";
import Card from "../components/Card";

const Gallery = () => {

    const galleryList = [
        { id: 1, img: 'https://img.freepik.com/free-vector/book-with-lighbulb-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4009.jpg' },
        { id: 2, img: 'https://img.freepik.com/free-vector/cute-cat-playing-yarn-ball-cartoon-illustration_138676-3256.jpg' },
        { id: 3, img: 'https://img.freepik.com/free-vector/cute-astronaut-riding-rocket-waving-hand-cartoon-icon-illustration-science-technology-icon-concept_138676-2130.jpg' },
        { id: 4, img: 'https://img.freepik.com/free-vector/cute-chef-girl-hijab-holding-spatula-cartoon-vector-icon-illustration-people-food-icon-isolated_138676-5977.jpg' },
        { id: 5, img: 'https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg' },
        { id: 6, img: 'https://img.freepik.com/free-vector/cute-male-courier-delivery-package-with-motorcycle-cartoon-vector-icon-illustration-people-job_138676-5708.jpg' },
        { id: 7, img: 'https://img.freepik.com/free-vector/peanut-vegetable-cartoon-illustration-premium-cartoon-vector-icon-illustration-food-object-icon_138676-6550.jpg' },
        { id: 8, img: 'https://img.freepik.com/free-vector/cute-fox-kitsune-warrior-holding-katana-sword-cartoon-vector-icon-illustration-animal-holiday-flat_138676-9848.jpg' },
        { id: 9, img: 'https://img.freepik.com/free-vector/cute-boy-moslem-prayer-cartoon-vector-icon-illustration-people-religion-icon-concept-isolated-flat_138676-7943.jpg' },
        { id: 10, img: 'https://img.freepik.com/free-vector/cute-rabbit-with-carrot-bag-cartoon-vector-icon-illustration-animal-education-icon-concept-isolated_138676-5813.jpg' },
        { id: 11, img: 'https://img.freepik.com/free-vector/cute-honey-bee-hug-honeycomb-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-6880.jpg' },
        { id: 12, img: 'https://img.freepik.com/free-vector/cute-chicken-holding-fried-chicken-cartoon-vector-icon-illustration-animal-food-icon-isolated-flat_138676-9768.jpg' },
        { id: 13, img: 'https://img.freepik.com/free-vector/cute-dragon-cloud-cartoon-vector-icon-illustration-animal-holiday-icon-isolated-flat-vector_138676-10501.jpg' },
        { id: 14, img: 'https://img.freepik.com/free-vector/cute-boy-girl-playing-badminton-cartoon-vector-icon-illustration-sport-people-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3813.jpg' },
        { id: 15, img: 'https://img.freepik.com/free-vector/flying-slice-pizza-cartoon-vector-illustration-fast-food-concept-isolated-vector-flat-cartoon-style_138676-1934.jpg' },
        { id: 16, img: 'https://img.freepik.com/free-vector/coffee-cup-floating-with-bean-cartoon-vector-icon-illustration-drink-food-icon-concept-isolated_138676-8608.jpg' },
        { id: 17, img: 'https://img.freepik.com/free-vector/cute-man-riding-camel-cartoon-vector-icon-illustration-people-animal-icon-concept-isolated-premium_138676-7776.jpg' },
        { id: 18, img: 'https://img.freepik.com/free-vector/cute-octopus-eating-takoyaki-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated-pr_138676-4795.jpg' },
        { id: 19, img: 'https://img.freepik.com/free-vector/hen-with-chick-cartoon-illustration_138676-2054.jpg' },
        { id: 20, img: 'https://img.freepik.com/free-vector/cute-girl-boy-moslem-greeting-eid-mubarak-online-with-phone-cartoon-vector-icon-illustration_138676-6884.jpg' },
    ];
    
    const [toggler, setToggler] = useState(Array(galleryList.length).fill(false));

    const handleToggle = (index) => {
        const newToggler = [...toggler];
        newToggler[index] = !newToggler[index];
        setToggler(newToggler);
    };

    const breadcumb = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Gallery', link: '/gallery' },
    ];

    return (
        <div>
            <div className="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <Breadcumb data={breadcumb}/>
                        <Card className={`mt-0`}>
                            <div className="p-4 md:p-5">
                                <div className="my-8 prose prose-slate mx-auto lg:prose-lg">
                                    <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
                                        Gallery
                                    </h1>
                                </div>
                                <div className="mx-auto flex items-center justify-center">
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {galleryList.map((item, index) => (
                                    <div key={item.id}>
                                        <img className="w-full sm:w-40 h-40 object-cover rounded-xl" loading="lazy"
                                            src={item.img} alt="Image Description" onClick={() => handleToggle(index)}/>
                                        <FsLightbox toggler={toggler[index]} sources={[item.img]} type="image"/>
                                    </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Pagination/>
                    </div>
                    <div className="md:col-span-1">
                        <Widget/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
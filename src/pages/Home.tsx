import Header from '../components/sections/Header';
import Testimonial from '../components/sections/Testimonial';
import About from '../components/sections/About';
import Faq from '../components/sections/Faq';
import Service from '../components/sections/Service';
import Pricing from '../components/sections/Pricing';
import Blog from '../components/sections/Blog';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';
import Subscribe from '../components/sections/Subscribe';

const Home = () => {
    return (
        <div>
            <Header />
            <Testimonial />
            <About />
            <Blog />
            <Service />
            <Pricing />
            <Team />
            <Faq />
            <Contact />
            <Subscribe />
        </div>
    );
};

export default Home;
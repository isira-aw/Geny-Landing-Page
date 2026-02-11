import { Hero } from '../components/sections/Hero';
import { Products } from '../components/sections/Products';
import { Gallery } from '../components/sections/Gallery';
import { Features } from '../components/sections/Features';
import { HowItWorks } from '../components/sections/HowItWorks';
import { CTA } from '../components/sections/CTA';

export const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <Products />
            <Gallery />
            <Features />
            <HowItWorks />
            <CTA />
        </div>
    );
};

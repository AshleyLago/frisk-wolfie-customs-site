import { useState, useEffect } from 'react';
import FwcLogo from "../../assets/fwc-logo.png";
import FwcIntroAnimation from "../../assets/fwc-intro-animation.gif";
import FwcIdleAnimation from "../../assets/fwc-idle-animation.gif";
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [currentImage, setCurrentImage] = useState(FwcIntroAnimation);

    /* Preloaded images for seamless transitions */
    useEffect(() => {
        const images = [FwcLogo, FwcIntroAnimation, FwcIdleAnimation];
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    /* Plays FWC Intro Animation on page load */
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentImage(FwcLogo);
        }, 8199);

        return () => clearTimeout(timeout);
    }, []);

    /* Plays the Idle Animation every minute */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(FwcIdleAnimation);

            const timeout = setTimeout(() => {
                setCurrentImage(FwcLogo);
            }, 1600);

            return () => clearTimeout(timeout);
        }, 10000); // Change to 60 seconds when complete

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="mt-5 mb-10 mx-10">
            {/* FWC Logo */}
            <section className="flex flex-col items-center relative w-full mb-10">
                <img
                    src={currentImage}
                    alt="Frisk Wolfie's Customs Logo"
                    className="max-w-full h-auto w-[40%] lg:w-[30%] xl:w-[20%] min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]"
                />
            </section>

            {/* Navigation Buttons */}
            <section className="flex flex-wrap justify-center w-full gap-4 lg:gap-6 xl:gap-8" style={{ fontFamily: '"Baloo 2", sans-serif', fontWeight: 800 }}>
                <NavLink to="/" className="button-navlink text-base lg:text-lg xl:text-xl p-2 lg:p-3 xl:p-4">
                    Home
                </NavLink>
                <NavLink to="/about" className="button-navlink text-base lg:text-lg xl:text-xl p-2 lg:p-3 xl:p-4">
                    About
                </NavLink>
                <NavLink to="/portfolio" className="button-navlink text-base lg:text-lg xl:text-xl p-2 lg:p-3 xl:p-4">
                    Portfolio
                </NavLink>
                <a
                    href="https://www.etsy.com/shop/FriskWolfieCustoms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit Frisk Wolfie's Customs' Etsy"
                    className="button-navlink text-base lg:text-lg xl:text-xl p-2 lg:p-3 xl:p-4"
                >
                    Etsy Shop
                </a>
            </section>
        </header>
    );
}
import PlaceholderFwcLogo from '../../assets/placeholder-fwc-logo.png'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="mt-5 mb-10 mx-10">

            {/* FWC Logo */}
            <section className="flex flex-col items-center relative w-full mb-10">
                <img
                    src={PlaceholderFwcLogo}
                    alt="Frisk Wolfie's Customs Logo"
                    className="max-w-full h-auto w-[40%] lg:w-[30%] xl:w-[20%] min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]"
                />
            </section>

            {/* Navigation Buttons */}
            <section className="flex flex-wrap justify-center w-full gap-4 lg:gap-6 xl:gap-8">
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
    )
}
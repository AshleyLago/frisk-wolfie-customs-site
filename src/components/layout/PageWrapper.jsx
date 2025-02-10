import Header from './Header.jsx';
import Footer from './Footer.jsx';

export const PageWrapper = ele => {
    return (
        <div className="bg-[#F3FCFD] flex flex-col justify-center items-center relative max-w-full mx-auto rounded-[4rem] w-150 lg:w-200 xl:w-225 py-10">
            <Header />
            { ele }
            <Footer />
        </div>
    );
};
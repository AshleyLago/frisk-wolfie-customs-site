import Header from './Header.jsx';
import Footer from './Footer.jsx';

export const pageWrapper = ele => {
    return (
        <div>
            <Header />
            { ele }
            <Footer />
        </div>
    );
};
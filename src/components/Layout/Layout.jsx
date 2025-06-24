import Header from '../Header/Header';
import Section from '../MainSection/MainSection';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Section>{children}</Section>
            <Footer />
        </>
    );
};

export default Layout;

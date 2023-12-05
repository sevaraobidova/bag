import Header from "./Header";
import Footer from "./Footer";
function Layout({Children}) {
    return ( 
        <>
            <Header />
            {Children}
            <Footer/>
        </>
     );
}

export default Layout;
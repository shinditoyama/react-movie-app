import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid p-4">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
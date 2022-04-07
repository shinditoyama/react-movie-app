import Navbar from "../Navbar";

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid p-4">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;
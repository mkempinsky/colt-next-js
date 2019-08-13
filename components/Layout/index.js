import Nav from '../Nav';
import Footer from '../Footer';
const Layout = props => {
    const nav = props.nav || false;
    return (
        <div className="container">
            {nav && <Nav />}
            <div className="main">{props.children}</div>
            <Footer />
            <style jsx>
                {`
                    .container {
                        min-width: 100%;
                    }
                    .main {
                        display: flex;
                        min-width: 100%;
                    }
                `}
            </style>
        </div>
    );
};

export default Layout;

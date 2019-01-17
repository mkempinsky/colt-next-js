import Nav from '../Nav';
import MaxWidth from '../MaxWidth';
const Layout = props => {
    return (
        <div>
            <Nav />
            <div>
                <MaxWidth>{props.children}</MaxWidth>
            </div>
        </div>
    );
};
export default Layout;

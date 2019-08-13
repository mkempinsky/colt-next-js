import Link from 'next/link';
import {aquaBlue, shadow} from '../../lib/styles';
class Nav extends React.Component {
    state = {
        isExpanded: false
    };
    toggleMenu = () => {
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));
    };
    render() {
        const {isExpanded} = this.state;
        return (
            <div className="nav">
                <div className="menu">
                    <ul>
                        {links.map(link => {
                            return (
                                <li>
                                    <Link href={link.path}>
                                        <a> {link.page}</a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <style jsx>
                    {`
                        .nav {
                            background: rgba(000, 000, 000, 0.8);
                            width: 100%;
                            position: fixed;
                            height: 50px;
                            top: 0;
                        }
                        .menu-btn {
                            position: absolute;
                            margin: 10px;
                            width: 50px;
                            height: 50px;
                            background: #fff;
                            border-radius: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        .menu-btn:hover {
                            cursor: pointer;
                            box-shadow: ${shadow()};
                            transition: all 0.25s;
                        }
                        .menu {
                            margin: 0 80px;
                        }
                        .menu ul {
                            display: flex;
                            list-style: none;
                            min-width: 200px;
                            justify-content: space-between;
                            box-shadow: ${shadow()};
                        }
                        .menu li a {
                            padding: 0px 5px;
                            color: #fff;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default Nav;

const links = [
    {
        page: 'Home',
        path: '/'
    },
    {
        page: 'Projects',
        path: '/projects'
    },
    {
        page: 'Blog',
        path: '/blog'
    }
];

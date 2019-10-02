import Link from 'next/link';
const Nav = props => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <div className="nav">
                <ul className="animated slideInLeft">
                    <li>
                        <Link as="/" href={{pathname: '/home'}}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link as="/about" href={{pathname: '/about'}}>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link as="/projects" href={{pathname: '/projects'}}>
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link as="/contact" href={{pathname: '/contact'}}>
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link as="/blog" href={{pathname: '/blog'}}>
                            <a>Blog</a>
                        </Link>
                    </li>
                </ul>
                <span className="copyright">Copyright ©️{year} mk</span>
            </div>
            <style jsx="true">
                {`
                    .nav {
                        padding: 50px 30px;
                        min-height: 100%;
                        width: 300px;
                        background: linear-gradient(
                            to left,
                            rgba(000, 000, 000, 0.3),
                            rgba(137, 207, 240, 0.9)
                        );
                    }
                    a {
                        color: #fff;
                        text-decoration: none;
                    }
                    ul {
                        margin: 0;
                        padding: 0;
                        list-style: none;
                    }
                    li {
                        margin-bottom: 50px;
                        text-align: center;
                    }
                    .copyright {
                        position: absolute;
                        bottom: 0;
                        padding-bottom: 5px;
                        text-align: center;
                        color: #fff;
                        width: 100%;
                    }
                `}
            </style>
        </div>
    );
};

export default Nav;

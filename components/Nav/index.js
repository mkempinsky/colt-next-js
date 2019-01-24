import Link from 'next/link';
const Nav = props => {
    return (
        <div>
            <ul>
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
                    <Link as="/blog" href={{pathname: '/blog'}}>
                        <a>Blog</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;

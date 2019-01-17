import React from 'react';
import {pink} from '../../lib/styles';
import Link from 'next/link';
import MaxWidth from '../MaxWidth';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <MaxWidth>
                    <div className="nav-container">
                        <div>
                            <Link href="/">
                                <a>Michele Writes Code</a>
                            </Link>
                        </div>
                        <div className="link-container">
                            <div>
                                <Link as="/projects" href={{pathname: '/projects'}}>
                                    <a>Projects</a>
                                </Link>
                            </div>
                            <div>
                                <Link as="/resources" href={{pathname: '/resources'}}>
                                    <a>Resources</a>
                                </Link>
                            </div>
                            <div>
                                <Link as="/blog" href={{pathname: '/blog'}}>
                                    <a>Blog</a>
                                </Link>
                            </div>

                            <div>
                                <Link as="/about" href={{pathname: '/about'}}>
                                    <a>About</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </MaxWidth>
                <style jsx>
                    {`
                        .nav {
                            background: ${pink()};
                            padding: 20px 30px;
                            position: fixed;
                            width: 100%;
                            z-index: 10;
                            bottom: 0;
                            font-family: 'Abel', sans-serif;
                            text-transform: uppercase;
                        }
                        .nav a {
                            color: ${pink(900)};
                            text-decoration: none;
                        }
                        .nav a:hover {
                            cursor: pointer;
                            transition: all 0.5s;
                        }
                        h1 {
                            margin: 0;
                        }
                        .nav-container {
                            display: flex;
                        }
                        .nav-container > div {
                            width: 100%;
                        }
                        .link-container {
                            display: flex;
                            justify-content: space-around;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default Nav;

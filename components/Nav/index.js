import React from 'react';
import {pink} from '../../lib/styles';
import Link from 'next/link';

class Nav extends React.Component {
    render(){
        return (
            <div className="nav">
                <div className="nav-container">
                    <div>
                        <Link href="/">
                           <a>Michele Writes Code</a>
                        </Link>
                    </div>
                    <div className="container">
                        <div>
                            <Link href="/blog"><a>Blog</a></Link>
                        </div>
                        <div>
                            <Link href="/projects"><a>Projects</a></Link>
                        </div>
                        <div>
                            <Link href="/about"><a>About</a></Link>
                        </div>
                    </div>
                </div>
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
                h1 {
                    margin: 0;
                }
                .nav-container {
                    display: flex;
                }
                .nav-container > div {
                    width: 100%;
                }
                .container {
                    display: felx;
                }
                `}
            </style>
            </div>
        )
    }
}

export default Nav;
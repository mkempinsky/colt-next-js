import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import {BREAKPOINT} from '../lib/styles';
import Link from 'next/link';
import Background from '../components/Background';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Background src="/static/city-2.jpg">
                        <div className="content">
                            <div>
                                <div className="buttons">
                                    <div>
                                        <Link href="/projects">
                                            <a>
                                                <Button hoverArrow={true}>
                                                    Projects
                                                </Button>
                                            </a>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/blog">
                                            <a>
                                                <Button hoverArrow={true}>Blog</Button>
                                            </a>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/about">
                                            <a>
                                                <Button hoverArrow={true}>About</Button>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Background>
                </Layout>
                <style jsx>
                    {`
                        h1 {
                            margin: 0;
                        }

                        .content {
                            display: flex;
                            align-items: center;
                            height: 100%;
                            justify-content: center;
                        }
                        .buttons {
                            display: block;
                        }
                        .buttons > div {
                            margin: 15px 0;
                        }
                        @media screen and (min-width: ${BREAKPOINT}) {
                            .buttons {
                                display: flex;
                            }
                            .buttons > div {
                                margin: 0 30px;
                            }
                        }
                    `}
                </style>
            </div>
        );
    }
}
export default Home;

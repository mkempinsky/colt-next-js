import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import {BREAKPOINT} from '../lib/styles';
import Link from 'next/link';
import Background from '../components/Background';

class HomeV2 extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <div className="main">
                        <div className="moon">
                            <div className="moon-img" />
                            <img src="/static/cloud-1.png" className="cloud-1" />
                        </div>
                    </div>
                </Layout>
                <style jsx>
                    {`
                        h1 {
                            margin: 0;
                        }
                        .main {
                            background: #232526;
                            background: -webkit-linear-gradient(
                                to left,
                                #414345,
                                #232526
                            );
                            background: linear-gradient(to left, #414345, #232526);
                            height: 100vh;
                            width: 100%;
                        }
                        .moon {
                            display: flex;
                            justify-content: flex-end;
                            padding: 50px 50px 0 0;
                        }
                        .moon-img {
                            background-image: url('/static/moon.png');
                            width: 400px;
                            height: 400px;
                            background-position: center center;
                            background-size: cover;
                            border-radius: 100%;
                            position: absolute;
                            z-index: 1;
                        }
                        .cloud-1 {
                            display: flex;
                            justify-content: flex-end;
                            width: 480px;
                            z-index: 2;
                            margin-top: 250px;
                            margin-right: 100px;
                        }
                    `}
                </style>
            </div>
        );
    }
}
export default HomeV2;

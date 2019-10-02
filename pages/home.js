import React from 'react';
import Layout from '../components/Layout';
class Home extends React.Component {
    render() {
        return (
            <div>
                <Layout overlay={true}>
                    <div className="wrapper">
                        <div className="video-container">
                            <div className="bubble">
                                <div>
                                    <h2>What Is Urban Planning?</h2>
                                    <iframe
                                        className="video"
                                        maxWidth="100%"
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/8VU2Iwp8Jjo"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
                <style jsx>
                    {`
                        h1,
                        h2,
                        h3 {
                            color: #fff;
                        }
                        h2 {
                            margin: 20px 0;
                            text-shadow: 2px -2px 15px rgba(000, 000, 000, 0.6);
                        }
                        .hero {
                            display: block;
                            position: relative;
                            color: #fff;
                        }
                        .bubble {
                            background: rgba(137, 207, 240);
                            width: 550px;
                            height: 550px;
                            padding: 50px;
                            border-radius: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            box-shadow: 2px -2px 15px rgba(000, 000, 000, 0.6);
                        }
                        .video-container {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100%;
                            margin-top: 100px;
                        }
                        .video {
                            border-radius: 6px;
                            box-shadow: 2px -2px 15px rgba(000, 000, 000, 0.6);
                        }
                    `}
                </style>
            </div>
        );
    }
}
export default Home;

import React from 'react';
import Layout from '../components/Layout';
import Background from '../components/Background';
class About extends React.Component {
    render() {
        return (
            <div>
                <Layout nav={true}>
                    <Background src="/static/city-3.jpg">
                        <div className="container">
                            <div className="content">
                                ldksfd sdflsdfjds fdfksdjfkdfjsd fsd]fsdfsdf
                            </div>
                        </div>
                    </Background>
                </Layout>
                <style jsx>
                    {`
                        .container {
                            display: flex;
                            align-items: flex-start;
                            height: 100%;
                            justify-content: center;
                            background: rgba(255, 255, 255, 0.2);
                        }
                        .content {
                            background: #fff;
                            margin: 100px 80px 100px 80px;
                            width: 100%;
                        }
                    `}
                </style>
            </div>
        );
    }
}
export default About;

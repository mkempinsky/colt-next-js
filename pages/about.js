import React from 'react';
import Layout from '../components/Layout';
class About extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <div className="content">hello from about page</div>
                </Layout>
                <style jsx>{`
                    .content {
                        background: #fff;
                        margin-top: 150px;
                        padding: 30px;
                        min-height: 300px;
                    }
                `}</style>
            </div>
        );
    }
}
export default About;

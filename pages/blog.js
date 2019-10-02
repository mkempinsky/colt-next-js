import React from 'react';
import fetch from '../lib/fetch';
import {getProp} from '../lib/utils';
import Layout from '../components/Layout';
class Blog extends React.Component {
    static async getInitialProps(context) {
        // get blog posts from wp api
        const url = `http://admin.coltkempinsky.com/wp-json/wp/v2/`;
        let response = {};
        let data = [];

        try {
            response = await fetch(context, url);
            data = await response.json();
        } catch (e) {
            console.warn(e);
            return {data: [], error: e};
        }
        return {data};
    }

    render() {
        const data = getProp(this.props, 'data');
        console.log('data', data);
        return (
            <div>
                <Layout>
                    <h2>Blog Posts</h2>
                    <div className="blog-container">
                        {data &&
                            data.map(item => {
                                const title = getProp(item, 'title.rendered');
                                const content = getProp(item, 'content.rendered');
                                return (
                                    <div>
                                        <h2 dangerouslySetInnerHTML={{__html: title}} />
                                        <div
                                            dangerouslySetInnerHTML={{__html: content}}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </Layout>
                <style jsx>{`
                    .blog-container {
                        display: block;
                    }
                `}</style>
            </div>
        );
    }
}
export default Blog;

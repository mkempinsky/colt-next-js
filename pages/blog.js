import React from 'react';
import Layout from '../components/Layout';
import fetch from '../lib/fetch';
import {getProp} from '../lib/utils';
class Blog extends React.Component {
    static async getInitialProps(context) {
        const url = `/wordpress-api/posts?`;
        console.log('URL', url);
        let response = {};
        let data = [];

        try {
            response = await fetch(context, url);
            data = await response.json();
        } catch (e) {
            console.warn(e);
            return {data: [], error: e};
        }
        return {data}
    }

    render(){
        const data = getProp(this.props, 'data');
        console.log(data);
        return (
            <div>
                <Layout>
                    {data && data.map(item => {
                        const title = getProp(item, 'title.rendered');
                        return (
                            <div key={title}>
                                <h3 dangerouslySetInnerHTML={{__html: title}}/>
                            </div>
                        )
                    })}
                </Layout> 
            </div>
        )
    }
}
export default Blog;
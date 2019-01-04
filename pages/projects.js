import React from 'react';
import Layout from '../components/Layout';
import fetch from '../lib/fetch';
import {getProp} from '../lib/utils';
class Projects extends React.Component {
    static async getInitialProps(context) {
        const url = `/wordpress-api/posts?&categories=${process.env.PROJECT_CATEGORY_ID}`;
        let response = {};
        let data = [];
        try {
            response = await fetch(context, url);
            data = await response.json();

            console.log('success')
        } catch (e) {
            console.warn(e);
            return {data: [], error: e};
        }
        return {data};
    }
    render(){
        const data = getProp(this.props, 'data');
        return (
            <div>
                <Layout>
                    {data && Array.isArray(data) && data.map(item => {
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
export default Projects;
import Head from 'next/head';
import fetch from '../lib/fetch';
import {BREAKPOINT} from '../lib/styles';
import {getProp} from '../lib/utils';
import url from 'url';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Byline from '../components/Byline';

class BlogPost extends React.Component {
    static async getInitialProps(context) {
        let post = getProp(context, 'query.slug', '');
        post = url.parse(post).pathname;
        let response = {};
        let data = [];

        try {
            response = await fetch(context, `/wordpress-api/posts?slug=${post}&_embed`);
            data = await response.json();
        } catch (e) {
            return {data: [], error: e};
        }
        return {data};
    }

    render() {
        const data = this.props.data[0];
        const title = getProp(data, 'title.rendered');
        const content = getProp(data, 'content.rendered');
        const author = getProp(data, '_embedded.author[0].name');
        console.log(data);
        return (
            <Layout>
                <div className="container">
                    <div>
                        <h1 dangerouslySetInnerHTML={{__html: title}} />
                        <div dangerouslySetInnerHTML={{__html: content}} />
                        <Byline author={author} />
                    </div>
                    <div>
                        <Sidebar />
                    </div>
                </div>
                <style jsx>{`
                    .container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .container {
                            display: flex;
                        }
                        .container > div:first-child {
                            padding-right: 15px;
                        }
                        .container > div:last-child {
                            padding-left: 15px;
                        }
                    }
                `}</style>
            </Layout>
        );
    }
}
export default BlogPost;

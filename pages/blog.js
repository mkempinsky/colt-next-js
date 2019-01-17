import React from 'react';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import fetch from '../lib/fetch';
import {getProp} from '../lib/utils';
import {BREAKPOINT} from '../lib/styles';
class Blog extends React.Component {
    static async getInitialProps(context) {
        // only get post with blog category
        const url = `/wordpress-api/posts?categories=22&_embed`;
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
                                const imgUrl = getProp(
                                    item,
                                    '_embedded.wp:featuredmedia[0].source_url'
                                );
                                const excerpt = getProp(item, 'content.rendered').slice(
                                    0,
                                    200
                                );
                                const slug = getProp(item, 'slug');
                                return (
                                    <BlogCard
                                        key={title}
                                        title={title}
                                        imgUrl={imgUrl}
                                        excerpt={excerpt}
                                        slug={slug}
                                    />
                                );
                            })}
                    </div>
                </Layout>
                <style jsx>{`
                    .blog-container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .blog-container {
                            display: flex;
                            flex-flow: row wrap;
                            justify-content: space-around;
                        }
                    }
                `}</style>
            </div>
        );
    }
}
export default Blog;

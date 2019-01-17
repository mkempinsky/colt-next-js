import {dropShadow, pink, brown} from '../../lib/styles';
import Link from 'next/link';
const BlogCard = props => {
    const title = props.title;
    const imgUrl = props.imgUrl;
    const excerpt = props.excerpt;
    const slug = props.slug;
    return (
        <Link
            as={`/blog/${slug}`}
            href={{
                pathname: '/blog-single',
                query: {
                    slug
                }
            }}>
            <div className="blog-card" style={{backgroundImage: `url(${imgUrl})`}}>
                <div className="blog-card-overlay">
                    <div className="text-container">
                        <h3 dangerouslySetInnerHTML={{__html: title}} />
                        <div className="excerpt">
                            <span dangerouslySetInnerHTML={{__html: `${excerpt}...`}} />
                        </div>
                    </div>
                </div>
                <style jsx>
                    {`
                        h3 {
                            color: #fff;
                            margin: 0;
                            display: flex;
                        }
                        .excerpt {
                            display: none;
                            color: ${brown()};
                        }
                        .blog-card {
                            height: 350px;
                            position: relative;
                            background-size: cover;
                            background-position: center center;
                            flex: 1 0 calc(25% - 20px);
                            max-width: 300px;
                            margin: 10px;
                            z-index: 1;
                        }
                        .blog-card:first-child {
                            margin-left: 0;
                        }
                        .blog-card:nth-child(4) {
                            margin-right: 0;
                        }
                        .blog-card:hover {
                            cursor: pointer;
                            transform: translate(0, -25px);
                            transition: all 0.5s;
                            z-index: 2;
                            box-shadow: ${dropShadow()};
                        }
                        .blog-card:hover h3 {
                            color: ${brown()};
                            padding-top: 25px;
                            transition: all 0.5s;
                        }
                        .text-container {
                            padding: 20px 10px;
                            max-width: 100%;
                            position: absolute;
                            bottom: 0;
                        }
                        .blog-card:hover .text-container {
                            background: rgba(255, 255, 255, 0.95);
                            transition: all 0.5s;
                        }
                        .blog-card:hover .excerpt {
                            max-width: 100%;
                            display: inline-block;
                            transition: all 0.5s;
                        }
                        .blog-card:hover .blog-card-overlay {
                            background: transparent;
                            transition: all 0.5s;
                        }
                        .blog-card-overlay {
                            width: 100%;
                            height: 100%;
                            background: rgba(000, 000, 000, 0.3);
                            position: relative;
                        }
                    `}
                </style>
            </div>
        </Link>
    );
};
export default BlogCard;

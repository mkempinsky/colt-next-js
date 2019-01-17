import React from 'react';
import {BREAKPOINT} from '../../lib/styles';

const Byline = props => {
    const author = props.author;
    return (
        <div className="byline">
            <div className="container">
                <div>
                    <img src="/static/profile-pic.png" className="profile-img" />
                </div>
                <div>
                    <span dangerouslySetInnerHTML={{__html: author}} />
                </div>
            </div>
            <style jsx>
                {`
                    .profile-img {
                        border-radius: 100%;
                        max-width: 100px;
                        transform: rotate(45deg);
                    }
                    .container {
                        display: block;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .container {
                            display: flex;
                            align-items: center;
                        }
                        .container > div:last-child {
                            margin-left: 20px;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default Byline;

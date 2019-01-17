import React from 'react';
import fetch from '../../lib/fetch';

class RssFeed extends React.Component {
    state = {};
    async componentDidMount() {
        this.setState({
            isFetching: true
        });
        const url = 'http://blog.teamtreehouse.com/feed';
        const response = await fetch(null, url, {
            method: 'GET',
            headers: {
                Accept: 'application/xml',
                'Content-type': 'Content-Type: application/xml'
            }
        });
        const data = await response.text();

        this.setState({
            resultFromFetch: data,
            isFetching: false
        });
    }
    render() {
        console.log(this.props.data);
        return (
            <div>
                <p>hello from rss feed</p>
            </div>
        );
    }
}

export default RssFeed;

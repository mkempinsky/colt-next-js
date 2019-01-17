import React from 'react';
import RssFeed from '../RssFeed';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <p>hello from sidebar</p>
                <RssFeed />
                <style jsx>
                    {`
                        .sidebar {
                            background: #ccc;
                            padding: 10px;
                            min-width: 350px;
                        }
                    `}
                </style>
            </div>
        );
    }
}
export default Sidebar;

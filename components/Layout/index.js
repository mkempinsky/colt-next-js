import Nav from '../Nav';
const Layout = ({overlay, children, bgImage}) => {
    overlay = overlay || true;
    bgImage = bgImage || '/static/san_diego-edit.jpg';

    return (
        <div className="layout" id="module">
            <div className="container">
                <Nav />
                <div className="content">
                    <div className={overlay ? 'overlay' : ''}>
                        <h1>Colt Kempinsky</h1>
                        <h3>Urban Planning Student</h3>
                        {children}
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    h1,
                    h2,
                    h3 {
                        color: #fff;
                    }

                    .layout {
                        background-image: url(${bgImage});
                        background-size: cover;
                        background-positon: top center;
                        height: 100vh;
                    }
                    .overlay {
                        background: rgba(000, 000, 000, 0.3);
                        width: 100%;
                        min-height: 100%;
                        padding: 50px 50px;
                        position: absolute;
                    }
                    .container {
                        display: flex;
                    }
                    .content {
                        width: 100%;
                        height: 100vh;

                        position: relative;
                    }
                `}
            </style>
        </div>
    );
};

export default Layout;

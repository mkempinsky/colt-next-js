const Background = props => {
    const src = props.src || '';
    return (
        <div className="background">
            {props.children}
            <style jsx>
                {`
				.background {
                            height: 100vh;
                            width: 100%;
                            background-image: url('${src}');
                            background-position: center center;
                            background-size: cover;
                        }
				`}
            </style>
        </div>
    );
};
export default Background;

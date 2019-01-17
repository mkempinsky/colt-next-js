import {BREAKPOINT, MAX_WIDTH} from '../../lib/styles';

const MaxWidth = props => {
    return (
        <div style={props.style}>
            {props.children}
            <style jsx>{`
                div {
                    margin-right: auto;
                    margin-left: auto;
                    max-width: ${MAX_WIDTH}px;
                }
                @media screen and (min-width: ${BREAKPOINT}) {
                    div {
                        padding: 0px 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default MaxWidth;

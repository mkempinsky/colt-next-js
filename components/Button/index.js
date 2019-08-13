import {aquaBlue} from '../../lib/styles';
const Button = props => {
    const theme = props.theme || 'white';

    return (
        <div className={`btn btn__${theme}`}>
            {props.children}
            <style jsx>
                {`
                    .btn {
                        width: 200px;
                        height: 50px;
                        border-radius: 5px;

                        padding: 2px 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        background: rgba(255, 255, 255, 0.9);
                    }
                    .btn:hover {
                        cursor: pointer;
                        transition: all 0.5s;
                    }
                    .btn__white {
                        border: 2px solid ${aquaBlue()};
                        background: rgba(255, 255, 255, 0.9);
                        box-shadow: 0px 0px 10px rgba(000, 000, 000, 0.4);
                    }
                    .btn__white:hover {
                        background: #fff;
                    }
                `}
            </style>
        </div>
    );
};
export default Button;

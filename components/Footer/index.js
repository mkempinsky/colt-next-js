import {aquaBlue} from '../../lib/styles';
import {format} from 'date-fns';

const Footer = props => {
    const date = format(new Date(), 'YYYY');

    console.log(date);
    return (
        <div className="footer">
            <div>copyright &#0169; {date}</div>
            <style jsx>
                {`
                    .footer {
                        background: ${aquaBlue(800)};
                        max-width: 100%;
                        height: 30px;
                        padding: 15px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                    }
                `}
            </style>
        </div>
    );
};
export default Footer;

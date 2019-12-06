import Document_, {Main, NextScript, Head} from 'next/document';
import {globalStyles} from '../lib/styles';

export default class Document extends Document_ {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, minimal-ui"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Questrial&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/static/icon.png" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
                    />

                    <style>{globalStyles}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

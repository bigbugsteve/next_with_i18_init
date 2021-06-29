import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document';

  
  export default class CustomDocument extends Document {
   
    render() {
      return (
        <Html lang="en">
          <Head>
          <link rel="icon" href="/favicon.png" sizes="32x32" />
          </Head>
          <body>
            <Main />
            <div id="loader-hook"></div>
            {/* <div id="modal-root" /> */}
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          {/* Place the stylesheet link here */}
          <link href='//cdn-images.mailchimp.com/embedcode/classic-061523.css' rel='stylesheet' type='text/css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

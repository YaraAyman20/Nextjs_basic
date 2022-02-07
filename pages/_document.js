import Document, { Head, Main, NextScript } from "next/document";

class MyDoc extends Document {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8"></meta>
          <meta name="description" content="My React app wit Next"></meta>
          <meta name="keywords" content="next react"></meta>
          <meta name="author" content="Yara"></meta>
          <link rel="stylesheet" href="/static/styles.css" />
          {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link> */}
        </head>

        <body>
            <Main />
            <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDoc;

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <title>LatnightFood</title>
      <link rel="icon" href="/Latnight-icons.jpeg" type="image/x-icon" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

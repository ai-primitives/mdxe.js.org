import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags are handled by theme.config.jsx */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

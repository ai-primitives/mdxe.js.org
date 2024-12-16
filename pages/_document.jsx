import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="MDXE: Zero-config MDX processor with Next.js integration" />
        <meta name="og:title" content="MDXE Documentation" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

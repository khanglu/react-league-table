import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>React League Table ⚽️</title>
          {styleTags}
          <style jsx global>{`
            @font-face {
              font-family: PremierLeagueSans;
              src: url(/static/PremierLeagueW01-Regular.woff2);
              font-weight: 400;
            }
            @font-face {
              font-family: PremierLeagueSans;
              src: url(/static/PremierLeagueW01-Bold.woff2);
              font-weight: 700;
            }
            @font-face {
              font-family: PremierLeagueSans;
              src: url(/static/PremierLeagueW01-Light.woff2);
              font-weight: 300;
            }
            @font-face {
              font-family: PremierLeagueSans;
              src: url(/static/PremierLeagueW01-LightIt.woff2);
              font-weight: 300;
              font-style: italic;
            }
            body {
              margin: 0;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
          `}</style>
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}

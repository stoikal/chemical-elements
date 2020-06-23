import Head from 'next/head'

export default function Home({ elementList }) {
  console.log(elementList)

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {
          elementList.map(element => {
            const { name } = element;
            return (
              <li>
                {name}
              </li>
            )
          })
        }
      </ul>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
        }

        li {
          margin-bottom: 15px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const elementList = await fetch('https://neelpatel05.pythonanywhere.com/')
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
      return [] 
    })

  return {
    elementList
  }
}
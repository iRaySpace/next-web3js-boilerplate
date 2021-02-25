import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Web3.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-green-500 text-center p-40">
        <h1 className="lg:text-7xl font-extrabold text-white mb-9">
          Welcome to Next Web3.js.
        </h1>
        <p className="text-2xl text-white">
          Get started by editing{' '}
          <code className="bg-gray-50 text-gray-900 font-mono py-3 border border-gray-200 rounded-xl px-3">
            pages/index.tsx
          </code>
        </p>
      </header>

      <main className="max-w-screen-lg mx-auto mt-20 mb-16">
        <section>
          <h2 className="uppercase text-lg font-semibold text-green-600 mb-3">
            Powered by latest techonologies
          </h2>
          <p className="text-6xl font-extrabold text-gray-900 mb-4">
            Boilerplate for your needs.
          </p>
          <p className="max-w-4xl text-2xl font-medium text-gray-500 mb-6">
            Together with Next.js and Tailwind CSS libraries using TypeScript
            help you kickstart your latest Web3.js projects.
          </p>
          <Link href="app">
            <button className="bg-green-600 py-3 px-4 rounded-lg text-white font-medium">
              Go to App
            </button>
          </Link>
        </section>
      </main>
      <footer className="bg-gray-100 p-4 text-gray-600">
        <div className="max-w-screen-lg mx-auto">© Ivan Ray Altomera</div>
      </footer>
    </div>
  )
}

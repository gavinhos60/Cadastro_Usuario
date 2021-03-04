import Head from 'next/head'
import { Cadastro } from '../components/cadastro'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Cadastro de usuário</title>
      </Head>
      <main>
        <Cadastro />
      </main>
    </div>
  )
}

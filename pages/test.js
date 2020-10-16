import Head from 'next/head'
import Link from 'next/link'
export default function Test(){
    return(
        <div>
        <Head>
            <title>Page de test</title>
        </Head>
        <h1>test</h1>
        <Link href="/"><a> Retour</a></Link>
        </div>
    )
}
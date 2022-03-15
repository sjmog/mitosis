import Layout from '../components/layout'
import Repos from '../components/Repos'
import { useSession, signIn } from 'next-auth/react'

const IndexPage = () => {
  const { data: session } = useSession()

  return(
    <Layout>
      <h1>Mitosis</h1>

      { !session ? (
          <>
            <button onClick={() => signIn('github')}>
              Sign in with Github
            </button>
          </> 
        ) : (
          <>
            <Repos />
          </>
        )}
    </Layout>
  )
}

export default IndexPage
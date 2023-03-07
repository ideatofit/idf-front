import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { useSession, signIn, signOut } from "next-auth/react"


function index(props: {
  footer: FooterProps
}) {
  const { data: session } = useSession()
  return (
    <div className='h-screen w-full bg-backgroundColor text-themeColor'>
      <Navigation />
      <div className='h-screen w-full bg-inherit grid place-items-center'>

        {session ?
          <div>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </div>
          :
          <div>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        }
      </div>
      <Footer footer={props['footer']} />
    </div>
  )
}

export async function getStaticProps() {
  const footer = await getFooterData()
  return {
    props: {
      footer
    }
  }
}

export default index
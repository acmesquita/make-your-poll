import nextCookie from "next-cookies";
import type { GetServerSideProps, NextPage } from 'next'
import { Header, SideBar, Container } from '../components'
import styles from '../styles/pages/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Container>
          Dashboard
        </Container>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = nextCookie(ctx);

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/users/login",
      },
      props:{},
    };
  }

  return {
    props: {}
  }
}

export default Home

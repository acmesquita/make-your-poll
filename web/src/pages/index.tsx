import type { NextPage } from 'next'
import { Header, SideBar, Container, Breadcrumb, Link } from '../components'
import styles from '../styles/pages/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Container>
          Surveys
        </Container>
      </main>
    </>
  )
}

export default Home

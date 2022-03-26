import type { NextPage } from 'next'
import { Header, SideBar, Container } from '../components'
import styles from '../styles/pages/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Container>
          <h1>Hello Poll</h1>
        </Container>
      </main>
    </>
  )
}

export default Home

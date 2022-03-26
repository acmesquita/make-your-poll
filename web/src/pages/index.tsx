import type { NextPage } from 'next'
import { Header, SideBar } from '../components'
import styles from '../styles/pages/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <h1>Hello Poll</h1>
      </main>
    </>
  )
}

export default Home

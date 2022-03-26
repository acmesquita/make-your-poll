/* eslint-disable react/jsx-key */
import type { NextPage } from 'next'
import { Header, SideBar, Container, Breadcrumb, Link, Form, Input } from '../../components'
import styles from '../../styles/pages/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Container>
          <Breadcrumb
            links={[
              {
                href: "/",
                children: "Survey"
              }
            ]}
            currentPage="New Survey"
          />

          <Form />

        </Container>
      </main>
    </>
  )
}

export default Home
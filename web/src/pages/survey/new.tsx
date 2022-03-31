/* eslint-disable react/jsx-key */
import type { NextPage } from 'next'
import { Header, SideBar, Container, Breadcrumb, Link, Form, Input } from '../../components'
import styles from '../../styles/pages/Home.module.css'

const New: NextPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Container>
          <Breadcrumb
            links={[
              {
                href: "/survey",
                children: "Survey"
              }
            ]}
            currentPage="New Survey"
          />

          <h2>Create a new poll</h2>

          <Form />

        </Container>
      </main>
    </>
  )
}

export default New

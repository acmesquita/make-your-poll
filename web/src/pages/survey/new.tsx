/* eslint-disable react/jsx-key */
import nextCookie from "next-cookies";
import type { GetServerSideProps, NextPage } from 'next'
import { Header, SideBar, Container, Breadcrumb, Link, Form, Input } from '../../components'
import styles from '../../styles/pages/Home.module.css'

type Props = {
  username: string
}

const New: NextPage<Props> = ({ username }: Props) => {
  return (
    <>
      <Header username={username}/>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token, username } = nextCookie(ctx);

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
    props: {
      username
    }
  }
}

export default New

/* eslint-disable react/jsx-key */
import nextCookie from "next-cookies";
import type { GetServerSideProps, NextPage } from 'next'
import { Header, SideBar, Container, Breadcrumb, Link, Form, Input } from '../../../components'
import { findPoll } from '../../../services/poll/find_poll'
import styles from '../../../styles/pages/Home.module.css'
import { Poll } from '../../../types/poll'

type Props = {
  poll: Poll
}

const Edit: NextPage<Props> = ({ poll }: Props) => {
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
            currentPage="Edit Survey"
          />

          <h2>Edit a poll</h2>

          <Form poll={poll}/>

        </Container>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token } = nextCookie(context);

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/users/login",
      },
      props:{},
    };
  }

  const { id } = context.query
  if (!id) {
    return {
      props: {
        poll: {}
      },
      redirect: '/survey'
    }
  }
  const poll = await findPoll(id as string)

  return {
    props: {
      poll
    }
  }
}


export default Edit

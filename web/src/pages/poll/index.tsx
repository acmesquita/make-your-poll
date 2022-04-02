import React from "react";
import nextCookie from "next-cookies";
import type { GetServerSideProps, NextPage } from 'next'
import { Header, SideBar, Container, Breadcrumb, Table, Th, Tr, Td, Link } from '../../components'
import { listPoll } from '../../services/poll/list_poll'
import styles from '../../styles/pages/Home.module.css'
import { Poll } from '../../types/poll'

type Props = {
  polls: Poll[]
  username: string
}

const PollList: NextPage<Props> = ({ polls, username }: Props) => {
  return (
    <>
      <Header username={username}/>
      <main className={styles.main}>
        <SideBar />
        <Container>
          <Breadcrumb
            currentPage="Poll"
          />
          <h2>Poll</h2>
          <Table>
            <thead>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Date</Th>
              <Th>Answers</Th>
              <Th>Actions</Th>
            </thead>
            <tbody>
              {polls.map(poll => (
                <Tr key={poll.id}>
                  <Td>{poll.id}</Td>
                  <Td><Link href={`poll/${poll.id}`}>{poll.title}</Link></Td>
                  <Td>{poll.date}</Td>
                  <Td>{poll.options.reduce((acc, option ) => ( acc+= option.answers), 0)}</Td>
                  <Td><Link href={`poll/${poll.id}/edit`}>Edit</Link> | <Link href={`poll/${poll.id}/answer`}>Share</Link></Td>
                </Tr>
              ))}
            </tbody>
          </Table>
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

  const polls = await listPoll(token)

  return {
    props: {
      polls,
      username
    }
  }
}

export default PollList;

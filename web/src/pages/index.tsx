import nextCookie from "next-cookies";
import type { GetServerSideProps, NextPage } from 'next'
import { Header, SideBar, Container, Link } from '../components'
import styles from '../styles/pages/Home.module.css'
import { listPoll } from "../services/poll/list_poll";
import { Poll } from "../types/poll";

type Props = {
  polls: Poll[]
  username: string
}

const Home: NextPage<Props> = ({ polls, username }) => {
  const countPolls = polls.length
  const totalAnswers = polls.map(poll => poll.options.map(option => option.answers).reduce((acc, num) => ( acc += num), 0)).reduce((acc, num) => ( acc += num), 0)
  return (
    <>
      <Header username={username}/>
      <main className={styles.main}>
        <SideBar />
        <Container>
          <h1>Dashboard</h1>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <h3><Link href="/poll">Total polls</Link></h3>
              <p>{countPolls}</p>
            </div>
            <div className={styles.card}>
              <h3>Total answers</h3>
              <p>{totalAnswers}</p>
            </div>
          </div>
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

export default Home

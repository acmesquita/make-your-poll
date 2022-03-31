import type { GetServerSideProps, NextPage } from 'next'
import { Header, SideBar, Container, Breadcrumb, Table, Th, Tr, Td } from '../../../components'
import { findPoll } from '../../../services/poll/find_poll'
import styles from '../../../styles/pages/Home.module.css'
import { Poll } from '../../../types/poll'

type Props = {
  poll: Poll
}

const Show: NextPage<Props> = ({ poll }: Props) => {
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
            currentPage={poll.title}
          />
          <h2>{poll.title}</h2>
          <p>{poll.description}</p>
          <small>{poll.date}</small>
          <Table>
            <thead>
              <Th>Options</Th>
              <Th>Number of Answers</Th>
            </thead>
            <tbody>
              {poll?.options.map(option => (
                <Tr key={option.description}>
                  <Td>{option.description}</Td>
                  <Td>{option.answers}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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

export default Show

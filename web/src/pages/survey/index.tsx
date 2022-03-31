import type { GetServerSideProps, NextPage } from 'next'
import { Header, SideBar, Container, Breadcrumb, Table, Th, Tr, Td, Link } from '../../components'
import { listPoll } from '../../services/poll/list_poll'
import styles from '../../styles/pages/Home.module.css'
import { Poll } from '../../types/poll'

type Props = {
  polls: Poll[]
}

const SurveyList: NextPage<Props> = ({ polls }: Props) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Container>
          <Breadcrumb
            currentPage="Survey"
          />
          <h2>Survey</h2>
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
                  <Td><Link href={`survey/${poll.id}`}>{poll.title}</Link></Td>
                  <Td>{poll.date}</Td>
                  <Td>{poll.options.reduce((acc, option ) => ( acc+= option.answers), 0)}</Td>
                  <Td><Link href={`survey/${poll.id}/edit`}>Edit</Link> | <Link href={`survey/${poll.id}/answer`}>Share</Link></Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const polls = await listPoll()
  return {
    props: {
      polls
    }
  }
}

export default SurveyList

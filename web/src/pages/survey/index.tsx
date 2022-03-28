import type { GetServerSideProps, NextPage } from 'next'
import { Header, SideBar, Container, Breadcrumb, Table, Th, Tr, Td } from '../../components'
import { listPoll } from '../../services/poll/list_poll'
import styles from '../../styles/pages/Home.module.css'

type Props = {
  polls: any[]
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
              <Th>Answers</Th>
              <Th>Actions</Th>
            </thead>
            <tbody>
              {polls.map(poll => (
                <Tr key={poll.id}>
                  <Td>{poll.id}</Td>
                  <Td>{poll.title}</Td>
                  <Td>0</Td>
                  <Td>Edit | Delete | Share</Td>
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

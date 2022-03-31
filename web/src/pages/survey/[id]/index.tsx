import type { GetServerSideProps, NextPage } from 'next'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Header, SideBar, Container, Breadcrumb, Table, Th, Tr, Td } from '../../../components'
import { findPoll } from '../../../services/poll/find_poll'
import styles from '../../../styles/pages/Home.module.css'
import { Poll } from '../../../types/poll'

type Props = {
  poll: Poll
}

ChartJS.register(ArcElement, Tooltip, Legend);

const Show: NextPage<Props> = ({ poll }: Props) => {
  const data = {
    labels: poll.options.map(option => option.description),
    datasets: [
      {
        label: '# of Votes',
        data: poll.options.map(option => option.answers),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
          scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
              min: 0,
              max: 100
            }
          },
          layout: {
            autoPadding: true
          }
        }
      },
    ],
  };

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
          <div className={styles.pieChart}>
            <h3>Results</h3>
            <Pie data={data} />
          </div>
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

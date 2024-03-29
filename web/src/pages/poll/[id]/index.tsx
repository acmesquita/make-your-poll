import nextCookie from "next-cookies";
import type { GetServerSideProps, NextPage } from 'next'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Header, SideBar, Container, Breadcrumb, Table, Th, Tr, Td } from '../../../components'
import { findPoll } from '../../../services/poll/find_poll'
import styles from '../../../styles/pages/Home.module.css'
import { Poll } from '../../../types/poll'

type Props = {
  poll: Poll,
  username: string
}

ChartJS.register(ArcElement, Tooltip, Legend);

const Show: NextPage<Props> = ({ poll, username }: Props) => {
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
      <Header username={username}/>
      <main className={styles.main}>
        <SideBar />
        <Container>
          <Breadcrumb
            links={[
              {
                href: "/poll",
                children: "Poll"
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
  const { token, username } = nextCookie(context);

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
      redirect: '/poll'
    }
  }
  try {
    const poll = await findPoll(id as string)

  return {
    props: {
      poll,
      username
    }
  }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/poll",
      },
      props:{},
    };
  }

}

export default Show

import { GetServerSideProps } from "next";
import Image from "next/image";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { findPoll } from "../../../services/poll/find_poll";
import style from '../../../styles/pages/Answer.module.css'
import { Poll } from "../../../types/poll";

type Props = {
  poll: Poll
}

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Result({ poll }: Props) {

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
    <main className={style.main}>
      <section className={`${style.section} ${style.bg}`}>
        <Image
          src="https://news.fordham.edu/wp-content/uploads/2019/05/Polling-1078.jpg"
          alt="banner"
          width={1000}
          height={600}
          sizes="50vw"
          layout="intrinsic"
        />
      </section>
      <section className={style.section}>
        <h2>{poll.title}</h2>
        <br />
        <p>{poll.description}</p>
        <div className={style.pieChart}>
          <Pie data={data} />
        </div>
      </section>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query
  if (!id) {
    return {
      props: {
        poll: {}
      },
      redirect: '/poll'
    }
  }
  const poll = await findPoll(id as string)

  return {
    props: {
      poll
    }
  }
}

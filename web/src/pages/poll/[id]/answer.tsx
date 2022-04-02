import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { findPoll } from "../../../services/poll/find_poll";
import { apiLocal } from "../../../services/utils/api";
import style from '../../../styles/pages/Answer.module.css'
import { Option, Poll } from "../../../types/poll";

type Props = {
  poll: Poll
}

export default function Answer({ poll }: Props) {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<Option>()

  async function selectOption(option: Option) {
    setSelectedOption(option)

    const data = {
      poll_id: poll.id,
      option_id: option.id
    }

    try {
      await apiLocal.post('/api/answer', data)

      setTimeout(() => {
        router.push(`/poll/${poll.id}/result`)
      }, 1000)
    } catch (error) {
      alert('Erro inesperado aconteceu. Tente novamente mais tarde')
    }
  }

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
        <ul className={style.list}>
          {poll.options.map(option => (
            <li
              key={option.id}
              className={(selectedOption && selectedOption.id !== option.id) ? style.disabled : ''}
              onClick={() => selectOption(option)}
            >
              {option.description}
            </li>
          ))}
        </ul>
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

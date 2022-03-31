import { useForm } from 'react-hook-form';
import { Button } from '../button';
import { Input } from "../input";
import styles from '../../styles/components/form.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Poll } from '../../types/poll';
import { createPoll } from '../../services/poll/create_poll';
import { updatePoll } from '../../services/poll/update_poll';
import { AxiosResponse } from 'axios';

type Props = {
  poll?: Poll
}

export function Form({ poll }: Props) {
  const [titleError, setTitleError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const router = useRouter()
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data: any) => {

    console.log(data);

    const response = await call(data, poll?.id)

    if (response.status === 400 && response.errors) {
      if (response.errors["title"]) {
        setTitleError(response.errors["title"][0])
      }
      if (response.errors["description"]) {
        setDescriptionError(response.errors["description"][0])
      }
    } else {
      router.push('/survey')
    }
  };

  async function call(data: any, pollId?: string) {
    if (pollId) {
      return await updatePoll(pollId, data)
    } else {
      return await createPoll(data)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input register={register} defaultValue={poll?.title} error={titleError} label='Title' name='title' type='text' />
      <Input register={register} defaultValue={poll?.description} error={descriptionError} label='Description' name='description' type='text' />
      <Input register={register} defaultValue={poll?.options[0]?.id} name='options[0].id' type='text' hidden />
      <Input register={register} defaultValue={poll?.options[0]?.description} label='Option 1' name='options[0].description' type='text' />

      <Input register={register} defaultValue={poll?.options[1]?.id} name='options[1].id' type='text' hidden />
      <Input register={register} defaultValue={poll?.options[1]?.description} label='Option 2' name='options[1].description' type='text' />

      <Input register={register} defaultValue={poll?.options[2]?.id} name='options[2].id' type='text' hidden />
      <Input register={register} defaultValue={poll?.options[2]?.description} label='Option 3' name='options[2].description' type='text' />

      <Input register={register} defaultValue={poll?.options[3]?.id} name='options[3].id' type='text' hidden />
      <Input register={register} defaultValue={poll?.options[3]?.description} label='Option 4' name='options[3].description' type='text' />
      <Button>Save</Button>
    </form>
  )
}

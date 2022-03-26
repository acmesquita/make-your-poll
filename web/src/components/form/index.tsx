import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Button } from '../button';
import { Input } from "../input";
import styles from '../../styles/components/form.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';

export function Form() {
  const [titleError, setTitleError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const router = useRouter()
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    const response = await fetch('/api/poll', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    const result = await response.json()

    if (result.errors) {
      setTitleError(result.errors["title"][0])
      setDescriptionError(result.errors["description"][0])
    } else {
      router.push('/')
      // redirect to home
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input register={register} error={titleError} label='Title' name='title' type='text' />
      <Input register={register} error={descriptionError} label='Description' name='description' type='text' />
      <Input register={register} label='Option 1' name='options[0].description' type='text' />
      <Input register={register} label='Option 2' name='options[1].description' type='text' />
      <Input register={register} label='Option 3' name='options[2].description' type='text' />
      <Input register={register} label='Option 4' name='options[3].description' type='text' />
      <Button>Save</Button>
    </form>
  )
}

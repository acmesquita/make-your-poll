import { useForm } from 'react-hook-form';
import { Button } from '../button';
import { Input } from "../input";
import styles from '../../styles/components/form.module.css'

export function Form() {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input register={register} errors={errors} label='Title' name='title' type='text' />
      <Input register={register} errors={errors} label='Description' name='description' type='text' />
      <Input register={register} errors={errors} label='Option 1' name='options[0].description' type='text' />
      <Input register={register} errors={errors} label='Option 2' name='options[1].description' type='text' />
      <Input register={register} errors={errors} label='Option 3' name='options[2].description' type='text' />
      <Input register={register} errors={errors} label='Option 4' name='options[3].description' type='text' />
      <Button>Save</Button>
    </form>
  )
}

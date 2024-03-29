import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Button, Input, Link } from '../../components'
import styles from '../../styles/pages/SignUp.module.css'
import { apiLocal, apiUser } from '../../services/utils/api';
import { useState } from 'react';

export default function SignUp() {
  const [error, setError] = useState('')
  const router = useRouter()
  const { handleSubmit, register } = useForm();

  const onSubmit = async (values: any) => {

    const data = { user: values }

    try {
      await apiLocal.post('/api/users/sign_up', data)
      router.push('/users/login')

    } catch (error) {
      setError('Username exists, please try another')
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>Make your poll</h1>
        {error && (<p className={styles.errorMsg}>{error}</p>)}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input register={register} label='Username' name='username' type='text' />
          <Input register={register} label='Password' name='password' type='password' />

          <Button>New Account</Button>
          <Link href='/users/login'>Login</Link>
        </form>
      </div>
    </main>
  )
}

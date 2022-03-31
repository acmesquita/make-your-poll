import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Button, Input, Link } from '../../components'
import styles from '../../styles/pages/SignUp.module.css'
import { apiUser } from '../../services/utils/api';
import { useState } from 'react';
import { login } from '../../services/utils/auth';

export default function Login() {
  const [error, setError] = useState('')
  const router = useRouter()
  const { handleSubmit, register } = useForm();

  const onSubmit = async (values: any) => {

    const data = { user: values }

    try {
      const response = await apiUser.post('/users/sign_in', data)

      if (response.status === 200) {

        const token = response.headers["authorization"]
        await login({ token })

        router.push('/')
      }
    } catch (error) {
      setError('Username or password invalid.')
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>Make your survey</h1>
        {error && (<p className={styles.errorMsg}>{error}</p>)}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input register={register} label='Username' name='username' type='text' />
          <Input register={register} label='Password' name='password' type='password' />

          <Button>Login</Button>
          <Link href='/users/sign_up'>Sing Up</Link>
        </form>
      </div>
    </main>
  )
}

import { FieldValues, useForm, UseFormRegister } from 'react-hook-form'
import styles from '../../styles/components/input.module.css'

type Props = {
  label?: string
  name: string
  type: "text" | "radio" | "password"
  register: UseFormRegister<FieldValues>
  error?: string;
  defaultValue?: string
  hidden?: boolean
}

export function Input({ label, name, type, register, error, defaultValue, hidden }: Props) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label} htmlFor={name}>{label}</label>}
      <input {...register(name)} hidden={hidden} defaultValue={defaultValue} className={styles.input} type={type} name={name} />
      {error && <small>{error}</small>}
    </div>
  )
}

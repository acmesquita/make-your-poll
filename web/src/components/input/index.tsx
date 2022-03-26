import { FieldValues, useForm, UseFormRegister } from 'react-hook-form'
import styles from '../../styles/components/input.module.css'

type Props = {
  label: string
  name: string
  type: "text"
  register: UseFormRegister<FieldValues>
  errors: any;
}

export function Input({ label, name, type, register, errors }: Props) {

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input {...register(name)} className={styles.input} type={type} name={name} />
      {errors[name] && <p>{errors[name]}</p>}
    </div>
  )
}

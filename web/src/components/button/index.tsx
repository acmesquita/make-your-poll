import { ButtonHTMLAttributes } from "react";
import styles from '../../styles/components/button.module.css'

export function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {

  return (
    <button className={styles.btn} {...props}>{children}</button>
  )
}

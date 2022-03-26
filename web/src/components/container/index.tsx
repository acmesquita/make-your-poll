import styles from '../../styles/components/container.module.css'

type Props = {
  children: any
}

export function Container({ children }: Props) {
  return (
    <section className={styles.container}>
      { children }
    </section>
  )
}

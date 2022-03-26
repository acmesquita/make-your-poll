import styles from '../../styles/components/sidebar.module.css'

export function SideBar() {
  return (
    <aside className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <h4>Survey</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>New Survey</li>
          </ul>
        </li>
      </ul>
      <footer className={styles.footer}>
        Catharina Mesquita © 2022
      </footer>
    </aside>
  )
}

import styles from '../../styles/components/sidebar.module.css'
import { Link } from '../link'

export function SideBar() {
  return (
    <aside className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <h4><Link href='/survey'>Survey</Link></h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href='/survey/new'>New Survey</Link>
            </li>
          </ul>
        </li>
      </ul>
      <footer className={styles.footer}>
        Catharina Mesquita © 2022
      </footer>
    </aside>
  )
}

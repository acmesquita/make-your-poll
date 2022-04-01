import { logout } from '../../services/utils/auth'
import styles from '../../styles/components/header.module.css'
import { Link } from '../link'

type Props = {
  username: string
}

export function Header({ username }: Props) {

  return (
    <nav className={styles.container}>
      <h1><Link href='/'>Make your Survey</Link></h1>
      <div>
        <p>{username}, <Link href='#' onClick={logout}>logout?</Link></p>
      </div>
    </nav>
  )
}

import { Link, LinkProps } from "../link"
import styles from '../../styles/components/breadcrumb.module.css'

type Props = {
  links: LinkProps[]
  currentPage: string
}

export function Breadcrumb({ links, currentPage }: Props) {

  return (
    <div className={styles.container}>
      {links.map((link) => (
        <>
          <Link key={link.href} {...link} />
          <span>/</span>
        </>
      ))}
      <p>{currentPage}</p>
    </div>
  )
}

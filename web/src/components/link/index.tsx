export type LinkProps = {
  children: string
  href: string
  onClick?: () => void
}

export function Link({ children, href, onClick }: LinkProps) {
  return (
    <a href={href} onClick={onClick}>{ children }</a>
  )
}

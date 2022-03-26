export type LinkProps = {
  children: string
  href: string
}

export function Link({ children, href }: LinkProps) {
  return (
    <a href={href}>{ children }</a>
  )
}

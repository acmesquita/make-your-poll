import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import React, { useEffect } from 'react'

export const login = ({ token }: { token: string}) => {
  cookie.set('token', token, { expires: 1 })
  Router.push('/')
}

export const auth = (ctx: { res?: any; req?: { headers: { cookie?: string | undefined } } | undefined }) => {
  const { token } = nextCookie(ctx)

  // If there's no token, it means the user is not logged in.
  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/users/login' })
      ctx.res.end()
    } else {
      Router.push('/users/login')
    }
  }

  return token
}

export const logout = () => {
  cookie.remove('token')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now().toString())
  Router.push('/login')
}

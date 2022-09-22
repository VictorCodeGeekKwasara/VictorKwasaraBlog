import React from 'react'
import {wrapper} from './footer.module.css'

export default function Footer() {
  return (
    <div class={wrapper}>
      &copy; professorCodeGeek { new Date().getFullYear()}
    </div>
  )
}

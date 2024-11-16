import Link from "next/link"
import React from 'react'

export default function Logo(props) {
  return (
    <div {...props}>
      <Link href='/'>
        <img src='/logo.png' alt='Logo' className='w-12 h-12'></img>
      </Link>
    </div>
  )
}
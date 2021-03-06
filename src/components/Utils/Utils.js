import React from 'react'
import './Utils.css'

export function Button({ className, ...props }) {
  return <button className={['Button', className].join(' ')} {...props} />
}

export function Textarea({ className, ...props }) {
  return (
    <textarea className={['Textarea', className].join(' ')} {...props} />
  )
}

export function Hyph() {
  return <span className='Hyph'>{' - '}</span>
}


export function Section({ className, list, ...props }) {
    const classes = [
      'Section',
      list && 'Section--list',
      className,
    ].filter(Boolean).join(' ')
    return (
      <section className={classes} {...props} />
    )
  }
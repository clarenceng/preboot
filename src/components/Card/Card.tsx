import React from 'react'
import classnames from 'classnames'
import { size } from '../../types'
import './Card.scss'

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  size?: size
  block?: boolean
}

export const Card = ({
  children,
  size,
  block,
  className
}: ICard) => {
  const styles = classnames(
    'c-card',
    `c-card--${size}`,
    block && 'c-card--block',
    className
  )
  return (
    <div className={ styles }>{ children }</div>
  )
}

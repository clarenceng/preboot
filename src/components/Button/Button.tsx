import React from 'react'
import classnames from 'classnames'
import { inputSizes, appearance } from '../../styles/types'
import './Button.scss'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: appearance,
  size?: inputSizes
}

export const Button = ({
  children,
  appearance = 'default',
  size = 'md',
  className
}: IButton) => {
  const styles = classnames(
    'c-button',
    `c-button--${appearance}`,
    `c-button--${size}`,
    className,
  )
  return (
    <button type='button' className={ styles }>
      { children }
    </button>
  )
}

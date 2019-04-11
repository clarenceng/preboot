import React from 'react'
import classnames from 'classnames'
import { inputSizes } from '../../styles/types'
import './TextInput.scss'

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: inputSizes
}

export const TextInput = ({
  className,
  type = 'string',
  inputSize = 'md'
}: ITextInput ) => {
  const styles = classnames(
    'c-text-input',
    `c-text-input--${inputSize}`,
    className
  )
  return (
    <input type={ type } className={ styles }/>
  )
}

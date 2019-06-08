import React from 'react'
import classnames from 'classnames'
import './Grid.scss'

export type cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface IRow extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number
}

interface ICol extends React.HTMLAttributes<HTMLDivElement> {
  length: cols
  lg?: cols
  md?: cols
  sm?: cols
}

export const Row = ({
  children,
  gutter,
  className
}: IRow) => {
  const styles = classnames(
    'c-row',
    className
  )
  return (
    <div className={ styles } style={ gutter ? {
      marginBottom: gutter
    }: undefined }>
      { children }
    </div>
  )
}

export const Col = ({
  children,
  length,
  lg,
  md,
  sm,
  className
}: ICol) => {
  const styles = classnames(
    'c-col',
    `c-col-${length}`,
    lg && `c-col-${lg}--lg`,
    md && `c-col-${md}--md`,
    lg && `c-col-${sm}--sm`,
    className
  )
  return (
    <div className={ styles }>
      { children }
    </div>
  )
}

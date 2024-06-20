import React from 'react'
import styles from '@/molecules/molecules.module.css'

export const Button = ({
  children,
  onClick,
  icon: Icon,
}: {
  children: React.ReactNode
  onClick?: (event: React.FormEvent<HTMLFormElement>) => void
  icon?: React.ComponentType<any>
}) => (
  <button
    type="submit"
    className={styles['form__button']}
    onClick={(e) => onClick?.(e as unknown as React.FormEvent<HTMLFormElement>)}
  >
    <span className={styles['form__buttonText']}>
      {' '}
      {Icon && <Icon />} {children}
    </span>
  </button>
)

export default Button

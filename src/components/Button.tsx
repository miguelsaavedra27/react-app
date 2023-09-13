import React from 'react'

interface ButtonProps {
    children: string
    onClick: () => void
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' 
}
const Button = ({children, onClick, color = "primary"}: ButtonProps) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    )
}

export default Button
import React from 'react'
import styles from "./Card.module.scss"

interface IProps {
    children: React.ReactNode
    className?: string
}

const Card: React.FC<IProps> = ({ children, className }) => {
    return (
        <div className={`${styles.root} ${className}`}>
            {children}
        </div>
    )
}

export default Card
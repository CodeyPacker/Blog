import styles from './Header.module.scss'

export default function Header({ title }) {
  return (
    <div className={styles.header}>
      <span className={styles.logo, 'constraint'}>{title}</span>
    </div>
  )
}

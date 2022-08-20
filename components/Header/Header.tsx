import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header>
      <h1 className={styles['name-plate']}>
        <span>Andrew MacLean</span>
      </h1>
    </header>
  )
}

import styles from './Footer.module.scss'
export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <p>
        Send your memes &amp; inquiries to{' '}
        <a href="mailto:andrew@macleanweb.com">andrew@macleanweb.com</a>
      </p>
      <p>&copy; {year} Andrew MacLean </p>
    </footer>
  )
}

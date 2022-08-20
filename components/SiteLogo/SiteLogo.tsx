import Image from 'next/image'
import styles from './SiteLogo.module.scss'

export const SiteLogo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/siteLogo.svg" alt="MW" width="50px" height="50px" />
    </div>
  )
}

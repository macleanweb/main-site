import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { RichText } from '../RichText/RichText'
import Image from 'next/image'
import styles from './Layout.module.scss'
import { Homepage, HomepageMainContent } from '../../src/schema'

interface Props {
  pageData: Homepage
}

export const Layout = ({ pageData }: Props) => {
  const { mainContent } = pageData
  return (
    <>
      <main className={styles.main}>
        <aside className={styles['image-container']}>
          <div className={styles['image-wrapper']}>
            <Image
              src="/andrew_misha_2022.jpg"
              layout="fill"
              objectFit="cover"
              alt="me"
            />
          </div>
        </aside>
        <section className={styles.text}>
          <Header />
          <RichText richTextResponse={mainContent as HomepageMainContent} />
        </section>
      </main>
      <Footer />
    </>
  )
}

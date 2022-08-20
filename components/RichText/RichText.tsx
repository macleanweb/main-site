import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { HomepageMainContent } from '../../src/schema'
import styles from './RichText.module.scss'

interface Props {
  richTextResponse: HomepageMainContent
}

export const RichText = ({ richTextResponse }: Props) => {
  return (
    <div className={styles.richtext}>
      {documentToReactComponents(richTextResponse.json)}
    </div>
  )
}

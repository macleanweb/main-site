import { BLOCKS, EntryLinkBlock } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { HomepageMainContent } from '../../src/schema'
import styles from './RichText.module.scss'

interface Props {
  richTextResponse: HomepageMainContent
}

function renderOptions(links) {
  // create an entry map
  const entryMap = new Map()
  // loop through the block linked entries and add them to the map
  for (const entry of links.entries.block) {
    entryMap.set(entry?.sys.id, entry)
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node: EntryLinkBlock) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id)
        // render the entries as needed
        if (entry.__typename === 'CareerHighlight') {
          return (
            <div className={styles['career-highlight']}>
              <h5>{entry.title}</h5>
              <span>{entry.subHeader}</span>
              {entry.context?.json && (
                <div className={styles.description}>
                  {documentToReactComponents(entry.context.json)}
                </div>
              )}
            </div>
          )
        }
      },
    },
  }
}

export const RichText = ({ richTextResponse }: Props) => {
  return (
    <div className={styles.richtext}>
      {documentToReactComponents(
        richTextResponse.json,
        renderOptions(richTextResponse.links)
      )}
    </div>
  )
}

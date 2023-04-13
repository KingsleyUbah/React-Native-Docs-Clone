import {useState, useEffect} from 'react'
import { ExTooltip } from './tooltip';
import styles from './tab.module.css'

function Tabs() {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: 'Android',
      title: 'Title 1',
      content: 'Android developers may be familiar with this concept.'
    },
    {
      id: 2,
      tabTitle: 'iOS',
      title: 'Title 2',
      content: 'iOS developers may be familiar with this concept.'
    },
    {
      id: 3,
      tabTitle: 'Web',
      title: 'Title 3',
      content: 'Web developers may be familiar with this concept.'
    }
  ]

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id)
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {
          tabs.map((tab, i) => 
            <button
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
              className={currentTab === `${tab.id}`? styles.tabBtnActive: styles.tabBtn}
            >
              {tab.tabTitle}
            </button>
          )
        }
      </div>
      <div className={styles.content}>
        {
          tabs.map((tab, i) =>
            <div key={i}>
              {
                currentTab === `${tab.id}` &&
                <div>
                  <ExTooltip content={tab.content} />
                </div>                
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

  export default function MyApp() {
    return <Tabs />
  }
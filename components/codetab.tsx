import {useState, useEffect} from 'react'
import styles from './tab.module.css'
import FUNCTIONBLOCK from '../code/function.md'
import CLASSBLOCK from '../code/class.md'
import Markdown from 'markdown-to-jsx'

function CodeTabs() {  
  const [currentTab, setCurrentTab] = useState("1");
  const [markdown, setMarkdown] = useState('');

  const tabs = [
    {
      id: 1,
      tabTitle: 'Functional Component',
      title: 'Title 1'      
    },
    {
      id: 2,
      tabTitle: 'Class Component',
      title: 'Title 2'      
    }
  ]

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id)
  }

  useEffect(() => {    
    if(currentTab == '1') {      
      fetch('https://raw.githubusercontent.com/KingsleyUbah/sample-markdown/main/function.md')
      .then(res=> res.text())
      .then(res => setMarkdown(res))

    } else {
      fetch('https://raw.githubusercontent.com/KingsleyUbah/sample-markdown/main/class.md')
      .then(res=> res.text())
      .then(res => setMarkdown(res))
    }     
        
  }, [])

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
                  <Markdown>{markdown}</Markdown>
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
    return <CodeTabs />
  }
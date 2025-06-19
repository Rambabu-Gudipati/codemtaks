import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const tabs = [
  {
    id : 1,
    name : "Home"
  },
  {
    id : 2,
    name : "About"
  },
  {
    id : 3,
    name: "Services"
  }
]
function App() {
  const [count, setCount] = useState(0)
  const [tabsData, setTabsData] = useState(tabs)
  const [activeTabItem, setActiveTabItem] = useState(1)
  const [activeIndex, setAcitveIndex] = useState(0)


  const onChangeActiveTabItem = (tabValue :any) => {
    console.log(tabValue)
    setActiveTabItem(tabValue)
  }

    const getActiveIndex = () => {
    return activeIndex;
  };

  return (
   <div >
      {/* <ul className='tabs-container'>
          {tabsData.map((item, index) => (
            item.id === activeTabItem ? <li key={index} className='list-item-active' style={{ listStyleType: 'none', margin: 0, padding: 0, color: "red" }} onChange={() => onChangeActiveTabItem(item.id)}>{item.name}</li> : <li key={index} className='list-item' style={{ listStyleType: 'none', margin: 0, padding: 0, color: "green" }} onChange={() => onChangeActiveTabItem(item.id)}>{item.name}</li>
            
          ))}
        </ul> */}
         <div className='tabs-container'>
        {tabsData.map((item:any, index:any) => (
          <div>
            {activeIndex === index ?  <button onClick={() => setAcitveIndex(index)} style={{color : "red"}}>{item.name}</button> :  <button onClick={() => setAcitveIndex(index)} style={{color: "green"}}>{item.name}</button>}
              

          </div>
        ))}
</div>
   <p>Current active index: {getActiveIndex()}</p>
    
   </div>
  )
}

export default App

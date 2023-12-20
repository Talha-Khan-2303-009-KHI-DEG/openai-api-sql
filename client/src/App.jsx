import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'
import { useState } from 'react'

function App() {
  const [queryDes, setQueryDesc] = useState("") 

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log("Form Submitted: ",queryDes);
  };

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="" className={styles.icon}/>
      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>
        <input type="text" name="query-description" placeholder="Enter your query" onChange={(e)=>setQueryDesc(e.target.value)}/>
        <input type="submit" value="Generate your response" />
      </form>
    </main>
  )
}
export default App

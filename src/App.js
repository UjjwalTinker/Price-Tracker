import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const[name,setname]= useState(' ')
  const[datetime,setdatetime]= useState(' ')
  const[description,setdescription]= useState(' ')
  const[transactions,settransactions]= useState([])

  async function  getTransaction(){
    const url= process.env.REACT_APP_API_URL + "/transaction";
    const response = await fetch(url)
    return await response.json();
  }

  useEffect(()=>{
    getTransaction().then(settransactions)
  },[])

  async function AddNewTransaction(e){
 
    e.preventDefault();
    const url= process.env.REACT_APP_API_URL + "/transaction";

    const price = name.split(' ')[1];

    fetch(url,{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({price,
        name:name.substring(price.length+1),
        description,
        datetime
      })
    })

    getTransaction().then(settransactions)
        setname('')
        setdatetime('')
        setdescription('')
      
        
      
    
    
  }

  return (
    <main>
      <h1>
        $400 <span>.00</span>{" "}
      </h1>
      <form onSubmit={AddNewTransaction}>
        <div className="basic">
          <input type="text" value={name}
          onChange={e=>setname(e.target.value)} placeholder={"+200 new TV"}></input>

          <input type="datetime-local"  value={datetime}
          onChange={e=>setdatetime(e.target.value)}></input>
        </div>

        <div className="description">
          <input type="text"  value={description
          }onChange={e=>setdescription(e.target.value)} placeholder={"Description"}></input>
        </div>

        <button type="submit">Add new Transaction</button>
      </form>

      <div className="transactions">
        {transactions.length>0 && transactions.map(transaction =>(
         <div className="transaction">
         <div className="left">
           <div className="name">{transaction.name}</div>
           <div className="description">{transaction.description}</div>
         </div>

         <div className="right">
          {console.log(transaction.price)}
           <div className={"price" +(transaction.price<0?"red":"green")}>{transaction.price}</div>
           <div className="datetime">2024-12-18 15:50</div>
         </div>
       </div>
        ))}
      
      </div>
    </main>
  );
}

export default App;

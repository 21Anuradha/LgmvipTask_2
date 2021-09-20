 import React, { useState } from 'react'
 import './App.css';

 const App = () => {
   const [data, setData] = useState(null);
   const fetchData = async () => {
     const jsonData = await fetch("https://reqres.in/api/users?page=1%22");
     const data = await jsonData.json();
     console.log(data);
     setData(data.data);
   }
   return (
     <>
     <div className="app">
     <h1 className="app-heading">Let's Grow More</h1>
     </div>
  
     <div className="card-container">
       {
         data?(data.map((user) => {
        return (
             <div className="card" key={user.id}>
             <div className="card-top">
               <img src={user.avatar} alt="" className="card-img" />
             </div>
             <div className="card-bottom">
               <h4>{`${user.first_name} ${user.last_name}`}</h4>
               <p>{user.email}</p>
             </div>
             </div>
           )
         }
         )):(<button className="btn" onClick={fetchData}> Get Users</button>)
       }
     </div>
     </>

   )
 }
export default App;

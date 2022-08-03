import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const friends=[{name:"bayzid",age:20},{name:"alim",age:20},{name:"abdul",age:20}];
  
  const [friends,setfriends]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setfriends(data))
  })
  return (
    <div className="App">
      <header className="App-header">
        <MovieCount></MovieCount>
        {
        friends.map(frnd=><Friend name={frnd.name} age={frnd.ag} email={frnd.email }></Friend>)
        }

     
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    </div>
  );
}

function MovieCount(){
  
  let [count,setcount]=useState(0)
  const HandleClick = () =>
    setcount(count+1)
  
  return(
    <div>
      <button onClick={HandleClick} >Add movie </button>
      <h3>add movie:{count}</h3>
      <MovieDisplay movie={count} ></MovieDisplay>
      <MovieDisplay movie={count+10} ></MovieDisplay>
    </div>
    
  )
}
function MovieDisplay(props){
 return <h4>my movie:{props.movie}</h4>
}

function Friend(props){
  // console.log(props)
  const FriendStyle={
    border:'2px solid cyan',
    margin:'5px'
  }
  return(
    <div style={FriendStyle} >
      <h1>my friend name:{props.name}</h1>
      <h3>his age is :{props.age}</h3>
      <h4>his email address:{props.email}</h4>
    </div>
  )
}

export default App;

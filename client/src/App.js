import React from 'react';
import './App.css';
import {BrowserRouter ,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} /> 
          
        </div>
      </BrowserRouter>
    )
  }
}
// class App extends React.Component{
//   render(){
//     const arr = ["eat", "sleep", "code"]

//     const data = arr.map(item =>{
//                     return <h1>{item}</h1>
//                 })
//     return (
//       <div>
//          {data}
//       </div>
//     );
//   }
// }

// function App(){
//   const arr = ["eat", "sleep", "code"]
//   const data = arr.map(item =>{
//     return <h1>{item}</h1>
//   })
//   return(
//   <div>{data}</div>
//   );
// }

// const Coder = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h2>{props.address}</h2>
//     </div>
//   );
// }
// Class Component
// class Coder extends React.Component{
//   render(){
//     return(
//       <div>
//           <h1>{this.props.name}</h1>
//           <h2>{this.props.age}</h2>
//           <h2>{this.props.address}</h2>
//       </div>
//     );
//   }
// }

//state
// class App extends React.Component{

//   state={
//     title: "Anil Kashyap"
//   }
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(res2 => {
//       console.log(res2)
//       this.setState({
//         title:res2[0].title
//       })
//     })

//   }
//   render(){
    
//     return(
//       <div className="App">
//           <h1>{this.state.title}</h1>    
//       </div>
//     );
//   }
// }
export default App;
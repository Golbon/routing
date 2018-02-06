// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {
//   BrowserRouter,
//   Link,
//   Route
// } from 'react-router-dom';

// /*
// path {
//   'NY_ROUTE':NaBar,
//   '/':HomView,
//   '/items':ItemsView,
//   '/orders':OrderView
// }
// */
// const Todos = props =>(
//   <div>
//     <h3>Todos</h3>
//     <ul>
//       <li>Todo1</li>
//       <li>Todo2</li>
//       <li>Todo3</li>
//       <li>Todo4</li>
//     </ul>
   
//     </div>
// )
// const user1= props => (

// )
// const Users = props =>(
//   <div>
//     <h3>Items</h3>
//     <ul>
//       <li> <Link to="/Users/user1">User1</Link></li>
//       <li><Link to="/Users/user2">User2</Link></li>
//       <li><Link to="/Users/user3">User3</Link></li>
//       <li><Link to="/Users/User4">User4</Link></li>
//     </ul>
//     </div>
// )

// const HomeView = props =>(
//   <div className='content'>

//     <div className='homeview'>Users And Todos</div>
//     </div>
// )
// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//       <div className="App">
//       <header className="App-header">
//       <p>
//       <nav className='header'>
//         <p className='header1'> <Link to="/"> Home</Link></p>
//         <p className='header1'> <Link to="/users">Users</Link></p>
//         <p className='header1'> <Link to="/todos">ToDo</Link></p>
//         </nav>
//         </p>
//         </header>
//         <Route exact path="/"  component = {HomeView} />
//         <Route exact path="/todos"  component = {Todos} />
//         <Route exact path="/users"  component = {Users} />
//       </div>
//        </BrowserRouter>
//     );
//   }
// }
// export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Todos = () => (
  <Router>
    <div>
      <nav className='header'>
        <p className='header1'><Link  to="/">Home</Link></p>
        <p className='header1'><Link  to="/User">User</Link></p>
        <p className='header1'><Link  to="/Todo">Todo</Link></p>
      </nav>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/User" component={User}/>
      <Route path="/Todo" component={Todo}/>
    </div>
  </Router>
)

const Home = () => (
 
  <div className='content'>

<div className='homeview'>Users And Todos</div>
</div>
)

const Todo = () => (
  <div>
    <h2>About</h2>
  </div>
)

const User = ({ match }) => (


  <div>
    <h2>Users</h2>
    <ul>
      <li>
        <Link to={`${match.url}/user1`}>
          User1 
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/user2`}>
          User2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/user3`}>
          User3
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/user4`}>
          User4
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:userID`} component={Users}/>
     <Route exact path={match.url} render={() => (
      <h3>Please select a User.</h3>
    )}/>
  </div>
)

const Users = ({ match }) => (
  <div>
    <h3>{match.params.userID}</h3>
  </div>
)

export default Todos
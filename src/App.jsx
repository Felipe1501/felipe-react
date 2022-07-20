import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function sum(a, b){
  return a + b
}

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      clock: 1000,
      copo: "água"
    }
  }

  componentDidMount(){
    window.setTimeout(() => {
      this.setState({
        copo: "suco"
      })
        
    }, 3000)
  }

   alterarCopo = () => {
      this.setState({
        copo: "refrigerante"
      })

      
   }
    render(){
      const {clock, copo} = this.state
      return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
      )
    }
}

function primeiroJSX(){
  return(
    <div className='teste'>
      FELIPE BARBOSA - Introdução ao ReactJS
    <h1>Soma: {sum(20, 20)}</h1>  
    </div>
  )
}

function Apps() {
  return (
    <div className="App">
      <header className="App-header">
      <App />

      </header>
    </div>
  );
}

export default App;

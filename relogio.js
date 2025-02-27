import React , {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {hora: '00.00.00'}
      
  }

  componentDidMount(){

    setInterval(() => {
      this.setState({hora: new Date().toLocaleTimeString()})  //horario local
    }, 1000);
  }

  render(){
    return(
      <div>
        <h1>Horario local: {this.state.hora} </h1>
      </div>
    )
  }
}

export default App;

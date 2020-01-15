import React,{Component} from 'react';
import Card from './components/card/card';
import './App.css';

class App extends Component {
    state = {
     issues:[],
     bgblack:false,
     username:'',
     reponame:''
    }
    
    changeBackground = () => {
        this.setState({bgblack:!this.state.bgblack})
    }

    handleUserName = (event) => {
        this.setState({username:event.target.value})
    }

    handleRepoName = (event) => {
        this.setState({reponame:event.target.value})
    }

    onSubmit = async () => {
        const response = await fetch(`https://api.github.com/repos/${this.state.username}/${this.state.reponame}/issues`)
        if(response.status===200){
           
            let data = await response.json()
            console.log(data)
            this.setState({issues:data})
        }
        else{
            alert("FAILED TO FETCH ISSUES,PLEASE TRY AGAIN")
        }
    }
    render(){
        const bgcolor=this.state.bgblack?"black":"whitesmoke"
    return (
      <div className="App" style={{backgroundColor:bgcolor}}>
          <label style={{display:"flex",justifyContent:"flex-end"}}className="switch">
            <input type="checkbox" onClick={this.changeBackground}/>
            <span className="slider round"></span>
          </label>
      <div className="row">
        <div className="main">
          <h2 style={{color:"#04d6cb"}}>GRAB ISSUES<hr/>
          <span className="header-desc">A centralized place to list github issues from any github repository</span></h2>
          
          <input className="search_box" type="text" placeholder="Enter Github username" onChange={this.handleUserName}/>
          <input className="search_box" type="text" placeholder="Enter Repository name" onChange={this.handleRepoName}/>
          <button className="search_box" style={{backgroundColor:"#04d6cb",color:"white"}} onClick={this.onSubmit}>Search</button>
          <Card issues={this.state.issues} />
        </div>
      </div>
      </div>
    );
  }
  }
  
  export default App;

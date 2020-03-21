import React, { Component } from 'react';
import './App.css';
import { database } from './components/firebase';
import ClassComp from './components/ClassComp';

var d= new Date()
var day = d.getDay()
const daysOfWeek = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class App extends Component {
  constructor(){
    super();
    this.state = { gymStatus: undefined, todayClasses:[], doneLoading: false, isRest: undefined};
  }

  componentDidMount(){
    database.ref('/gymStatus/gymStatus').on('value', snap =>{
      this.setState({gymStatus: snap.val()})
    })

    database.ref(`classTimes/${daysOfWeek[day]}/rest`).once('value',
    (rest)=>{
      if(rest.exists()){
        this.setState({ isRest: true })
      }else{
        this.setState({ isRest: false })
      }
    })
    
    database.ref(`classTimes/${daysOfWeek[day]}/`).orderByKey().on('value', snop=>{
      var testArray =[]
      snop.forEach(moaClass=>{
        testArray.push(moaClass.val().title)
      })
      this.setState({ todayClasses: testArray, doneLoading: true})
    })
  }

  gymToggle = event =>{
    if (this.state.gymStatus === 'OPEN') {
      database.ref('/gymStatus').update({"gymStatus": "CLOSED"})
    } else{
      database.ref('/gymStatus').update({"gymStatus": "OPEN"})
    }
      
  }

  renderClasses(classProp){
    if(this.state.isRest === false){
      return( classProp.map(element => {
        return(
            <ClassComp propsMoa={element} />
        )
      }));
    }else{
      return(<div></div>)
    }
  }

  render(){
    return(
      <div>
        <div className='headerCont'>
          <h1>Invictos Control</h1>
        </div>
        <div className='wrapper'>
          <h2 className='sectionTitle'>Gym Status</h2>
          <div className='gymStatusCont'>
            <p>Academy is: {this.state.gymStatus}</p>
            <button className='gymToggle' onClick={this.gymToggle}>Switch</button>
          </div>
          <h2 className='sectionTitle'>Today's Classes</h2>
          { this.state.doneLoading ? this.renderClasses(this.state.todayClasses) : <p>Loading...</p>}
         </div>
      </div>
    )
  }
}

export default App;

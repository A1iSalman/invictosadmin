import React, { Component } from 'react';
import '../App.css'
import { database } from './firebase'

var d= new Date()
var day = d.getDay()
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default class ClassComp extends Component{
    constructor(){
        super();
        this.state = { excName: [], excSets:[], excReps:[], excRest:[], keyss:[], inputVal:'', repVal:'', setVal:'', restVal:'', setUpdate:'', repUpdate:'', restUpdate:'', classTimeHour:undefined, classTimeMinute:undefined, excExist:undefined, classLVL:undefined };
      }
  
      componentDidMount(){

        database.ref().child(`classTimes/${daysOfWeek[day]}/${this.props.propsMoa}`).once('value',
        snape=>{
          this.setState({classTimeHour: snape.val().hour, classTimeMinute: snape.val().minute, classLVL: snape.val().lvl})
        })
        var temp = []
        var keys = []
        var tempSets = []
        var tempReps = []
        var tempRest= []
        database.ref().child(`classTimes/${daysOfWeek[day]}/${this.props.propsMoa}/exc`).orderByKey().on('value', snop =>{
          if(snop.exists()){
            temp =[]
            keys =[]
            tempSets = []
            tempReps = []
            tempRest= []
          snop.forEach( exc =>{
            temp.push(exc.val().title)
            keys.push(exc.key)
            tempSets.push(exc.val().sets)
            tempReps.push(exc.val().reps)
            tempRest.push(exc.val().rest)
            this.setState({excName: temp})
            this.setState({keyss: keys})
            this.setState({excSets: tempSets, excRest:tempRest})
            this.setState({excReps: tempReps, excExist:true})
          })
          }else{
            this.setState({excExist:false})
          }
          
        })
      }
        
      updateVal(evt){
        this.setState({inputVal: evt.target.value})
      }
    
      addSets(setv){
        this.setState({setVal: setv.target.value})
      }
    
      addReps(repv){
        this.setState({repVal: repv.target.value})
      }

      addRest(restv){
        this.setState({restVal: restv.target.value})
      }
    
      updateSets(upset){
        this.setState({setUpdate: upset.target.value})
      }
    
      updateReps(uprep){
        this.setState({repUpdate: uprep.target.value})
      }

      updateRest(uprest){
        this.setState({restUpdate: uprest.target.value})
      }

    render(){
        return(
            <div className='classCont'>
              <h2 className='timeTitle'>{'Class Time '+this.state.classTimeHour + ':' + this.state.classTimeMinute + ' ' + this.state.classLVL}</h2>
            <div className='addCont'>
              <input className='exeInput' placeholder='Exercise Name' value={this.state.inputVal} onChange={evt => this.updateVal(evt)}></input>
              <div className='setsCont'>
                <input className='setInput' placeholder='Sets' value={this.state.setVal} onChange={setv => this.addSets(setv)}></input>
                <input className='repInput' placeholder='Reps' value={this.state.repVal} onChange={repv => this.addReps(repv)}></input>
                <input className='repInput' placeholder='Rest' value={this.state.restVal} onChange={restv => this.addRest(restv)}></input>
              </div>
              <button
                className='addButton'
                onClick={()=>{
                  if(this.state.excExist){
                    var newKey = (parseInt(this.state.keyss[this.state.keyss.length -1]))+1
                    database.ref().child(`classTimes/${daysOfWeek[day]}/${this.props.propsMoa}/exc/` + newKey).set({
                      title: this.state.inputVal,
                      reps: this.state.repVal,
                      sets: this.state.setVal,
                      rest: this.state.restVal
                    })
                  }else{
                    database.ref().child(`classTimes/${daysOfWeek[day]}/${this.props.propsMoa}`).update({
                      "exc": "1"
                    })
                    database.ref().child(`classTimes/${daysOfWeek[day]}/${this.props.propsMoa}/exc/1`).set({
                      title: this.state.inputVal,
                      reps: this.state.repVal,
                      sets: this.state.setVal,
                      rest: this.state.restVal
                    })
                  }
                  }}>add</button>
            </div>
            <ul>
              {this.state.excName.map(exx=> 
                <li>
                  <div className='liDiv'>
                    {exx}
                    <button className='removeButton' onClick={
                      ()=>{
                        var delKey = this.state.excName.indexOf(exx)
                        database.ref().child(`classTimes/${daysOfWeek[day]}/${this.props.propsMoa}/exc/`+ this.state.keyss[delKey]).remove()
                      }
                    }>x</button>
                  </div>
                  <div className='modSetCont'>
                    <p className='setTag'>Sets: </p>
                    <p className='repTag'>Reps: </p>
                    <p className='repTag'>Rest: </p>
                  </div>
                  <div className='updateCont'>
                    <input placeholder={this.state.excSets[this.state.excName.indexOf(exx)]} 
                          onChange={upset => this.updateSets(upset)}
                          className='updateSet'
                    ></input>
                    
                    <input placeholder={this.state.excReps[this.state.excName.indexOf(exx)]}
                          onChange={uprep => this.updateReps(uprep)}
                          className='updateSet'
                    ></input>

                    <input placeholder={this.state.excRest[this.state.excName.indexOf(exx)]}
                          onChange={uprest => this.updateRest(uprest)}
                          className='updateSet'
                    ></input>
                  </div>
                <button className='updateButton' onClick={()=>{
                  var setKey = this.state.excName.indexOf(exx)
                  database.ref().child(`classTimes/${daysOfWeek[day]}/${this.props.propsMoa}/exc/`+ this.state.keyss[setKey]).update({
                    sets: this.state.setUpdate,
                    reps: this.state.repUpdate,
                    rest: this.state.restUpdate
                  })
                }}>update</button>  
                </li>
              )}
            </ul>
          </div>
        )
    }
}
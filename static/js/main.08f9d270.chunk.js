(this.webpackJsonpinvadmin=this.webpackJsonpinvadmin||[]).push([[0],{16:function(e,t,a){},19:function(e,t,a){e.exports=a(35)},24:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(18),l=a.n(c),i=(a(24),a(8)),o=a(9),r=a(11),u=a(10),d=a(12),p=(a(16),a(14)),m=a.n(p);m.a.initializeApp({apiKey:"AIzaSyCK9nvIWUZlLjrSYn6HoC0DWeaA6m-82oY",authDomain:"invictos-8a5dd.firebaseapp.com",databaseURL:"https://invictos-8a5dd.firebaseio.com",projectId:"invictos-8a5dd",storageBucket:"invictos-8a5dd.appspot.com",messagingSenderId:"147877906452",appId:"1:147877906452:web:767e71a81d99aa46047f01"});var h=m.a.database(),v=(new Date).getDay(),f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).state={excName:[],excSets:[],excReps:[],excRest:[],keyss:[],inputVal:"",repVal:"",setVal:"",restVal:"",setUpdate:"",repUpdate:"",restUpdate:"",classTimeHour:void 0,classTimeMinute:void 0,excExist:void 0,classLVL:void 0},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.ref().child("classTimes/".concat(f[v],"/").concat(this.props.propsMoa)).once("value",(function(t){e.setState({classTimeHour:t.val().hour,classTimeMinute:t.val().minute,classLVL:t.val().lvl})}));var t=[],a=[],s=[],n=[],c=[];h.ref().child("classTimes/".concat(f[v],"/").concat(this.props.propsMoa,"/exc")).orderByKey().on("value",(function(l){l.exists()?(t=[],a=[],s=[],n=[],c=[],l.forEach((function(l){t.push(l.val().title),a.push(l.key),s.push(l.val().sets),n.push(l.val().reps),c.push(l.val().rest),e.setState({excName:t}),e.setState({keyss:a}),e.setState({excSets:s,excRest:c}),e.setState({excReps:n,excExist:!0})}))):e.setState({excExist:!1})}))}},{key:"updateVal",value:function(e){this.setState({inputVal:e.target.value})}},{key:"addSets",value:function(e){this.setState({setVal:e.target.value})}},{key:"addReps",value:function(e){this.setState({repVal:e.target.value})}},{key:"addRest",value:function(e){this.setState({restVal:e.target.value})}},{key:"updateSets",value:function(e){this.setState({setUpdate:e.target.value})}},{key:"updateReps",value:function(e){this.setState({repUpdate:e.target.value})}},{key:"updateRest",value:function(e){this.setState({restUpdate:e.target.value})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"classCont"},n.a.createElement("h2",{className:"timeTitle"},"Class Time "+this.state.classTimeHour+":"+this.state.classTimeMinute+" "+this.state.classLVL),n.a.createElement("div",{className:"addCont"},n.a.createElement("input",{className:"exeInput",placeholder:"Exercise Name",value:this.state.inputVal,onChange:function(t){return e.updateVal(t)}}),n.a.createElement("div",{className:"setsCont"},n.a.createElement("input",{className:"setInput",placeholder:"Sets",value:this.state.setVal,onChange:function(t){return e.addSets(t)}}),n.a.createElement("input",{className:"repInput",placeholder:"Reps",value:this.state.repVal,onChange:function(t){return e.addReps(t)}}),n.a.createElement("input",{className:"repInput",placeholder:"Rest",value:this.state.restVal,onChange:function(t){return e.addRest(t)}})),n.a.createElement("button",{className:"addButton",onClick:function(){if(e.state.excExist){var t=parseInt(e.state.keyss[e.state.keyss.length-1])+1;h.ref().child("classTimes/".concat(f[v],"/").concat(e.props.propsMoa,"/exc/")+t).set({title:e.state.inputVal,reps:e.state.repVal,sets:e.state.setVal,rest:e.state.restVal})}else h.ref().child("classTimes/".concat(f[v],"/").concat(e.props.propsMoa)).update({exc:"1"}),h.ref().child("classTimes/".concat(f[v],"/").concat(e.props.propsMoa,"/exc/1")).set({title:e.state.inputVal,reps:e.state.repVal,sets:e.state.setVal,rest:e.state.restVal})}},"add")),n.a.createElement("ul",null,this.state.excName.map((function(t){return n.a.createElement("li",null,n.a.createElement("div",{className:"liDiv"},t,n.a.createElement("button",{className:"removeButton",onClick:function(){var a=e.state.excName.indexOf(t);h.ref().child("classTimes/".concat(f[v],"/").concat(e.props.propsMoa,"/exc/")+e.state.keyss[a]).remove()}},"x")),n.a.createElement("div",{className:"modSetCont"},n.a.createElement("p",{className:"setTag"},"Sets: "),n.a.createElement("p",{className:"repTag"},"Reps: "),n.a.createElement("p",{className:"repTag"},"Rest: ")),n.a.createElement("div",{className:"updateCont"},n.a.createElement("input",{placeholder:e.state.excSets[e.state.excName.indexOf(t)],onChange:function(t){return e.updateSets(t)},className:"updateSet"}),n.a.createElement("input",{placeholder:e.state.excReps[e.state.excName.indexOf(t)],onChange:function(t){return e.updateReps(t)},className:"updateSet"}),n.a.createElement("input",{placeholder:e.state.excRest[e.state.excName.indexOf(t)],onChange:function(t){return e.updateRest(t)},className:"updateSet"})),n.a.createElement("button",{className:"updateButton",onClick:function(){var a=e.state.excName.indexOf(t);h.ref().child("classTimes/".concat(f[v],"/").concat(e.props.propsMoa,"/exc/")+e.state.keyss[a]).update({sets:e.state.setUpdate,reps:e.state.repUpdate,rest:e.state.restUpdate})}},"update"))}))))}}]),t}(s.Component),g=(new Date).getDay(),S=["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"],E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).gymToggle=function(t){"OPEN"===e.state.gymStatus?h.ref("/gymStatus").update({gymStatus:"CLOSED"}):h.ref("/gymStatus").update({gymStatus:"OPEN"})},e.state={gymStatus:void 0,todayClasses:[],doneLoading:!1,isRest:void 0},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.ref("/gymStatus/gymStatus").on("value",(function(t){e.setState({gymStatus:t.val()})})),h.ref("classTimes/".concat(S[g],"/rest")).once("value",(function(t){t.exists()?e.setState({isRest:!0}):e.setState({isRest:!1})})),h.ref("classTimes/".concat(S[g],"/")).orderByKey().on("value",(function(t){var a=[];t.forEach((function(e){a.push(e.val().title)})),e.setState({todayClasses:a,doneLoading:!0})}))}},{key:"renderClasses",value:function(e){return!1===this.state.isRest?e.map((function(e){return n.a.createElement(y,{propsMoa:e})})):n.a.createElement("div",null)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"headerCont"},n.a.createElement("h1",null,"Invictos Control")),n.a.createElement("div",{className:"wrapper"},n.a.createElement("h2",{className:"sectionTitle"},"Gym Status"),n.a.createElement("div",{className:"gymStatusCont"},n.a.createElement("p",null,"Academy is: ",this.state.gymStatus),n.a.createElement("button",{className:"gymToggle",onClick:this.gymToggle},"Switch")),n.a.createElement("h2",{className:"sectionTitle"},"Today's Classes"),this.state.doneLoading?this.renderClasses(this.state.todayClasses):n.a.createElement("p",null,"Loading...")))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
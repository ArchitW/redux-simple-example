import React from 'react';
import {connect} from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div className="App">
     <h1>{props.name}</h1>
     <button onClick={()=>props.changeName("Archit W")}>change Name</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name:state.name,
    wishes:state.wishes
  }
}

const mapDispatchToProps = (dispatch) =>{
return{
  changeName:(name) => {dispatch({
    type:'CHANGE_NAME',
    payload:name
  })}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

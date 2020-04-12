const iState = {
    name:"test user",
    wishes:['eat','code']
}

const reducer = (state=iState, action) => {
console.log("Action =>", action)
console.log("current State =>", state)
if(action.type === 'CHANGE_NAME'){
return {
    ...state,
    name:action.payload
}
}
    return state;
}

export default reducer;
const iState = {
    name:"",
    wishes:['eat','code']
}

const reducer = (state=iState, action) => {
console.log("Action =>", action)
    return state;
}

export default reducer;
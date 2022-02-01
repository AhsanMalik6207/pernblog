const init = {
    isLogin:false
}
const loginReducer = (state=init,action)=>{
    switch(action.type){
        case 'LOGIN':
        return {...state,isLogin:action.payload};
        default:
            return state;
    }
}
export default loginReducer;
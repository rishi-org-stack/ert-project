import {combineReducers} from 'redux';

const Is = {
    name:"rishi",
    password:"",
};



const reduce = (state = Is,action)=>{
      if (action.type === "CHANGE_IT"){
        state.name = action.payload
        return state
      };
    return state
};
// const rootreducer = combineReducers({
//     user:reduce
// });

export default reduce;
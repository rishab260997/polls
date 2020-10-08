import { combineReducers } from "redux";
import PollListreducer from "./PollListreducer";
import Registrationreducer from "./Registrationreducer";
import Loginreducer from "./Loginreducer";


const rootReducer = combineReducers({
  Registrationstatus: Registrationreducer,
  Loginstatus: Loginreducer,
  PollListstatus: PollListreducer,  
});

export default rootReducer;

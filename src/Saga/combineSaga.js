import { registrationRequest } from "./Registrationsaga";
import { loginRequest } from "./Loginsaga";
import { fork, all } from "redux-saga/effects";
function* watchAllSaga() {
  {
    yield all([
      fork(registrationRequest),
      fork(loginRequest),
    ]);
  }
}

export default watchAllSaga;

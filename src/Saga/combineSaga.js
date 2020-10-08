import { registrationRequest } from "./Registrationsaga";
import { loginRequest } from "./Loginsaga";
import { fork, all } from "redux-saga/effects";
import { PollListRequest } from "./PollListsaga";

function* watchAllSaga() {
  {
    yield all([
      fork(registrationRequest),
      fork(loginRequest),
      fork(PollListRequest),
    ]);
  }
}

export default watchAllSaga;

import { createAction } from "redux-actions";
import * as actions from "../actionTypes/actionsTypes";

export const RegistrationRequest = createAction(actions.Registation_Request);
export const RegistrationSuccess = createAction(actions.Registation_Success);
export const RegistrationError = createAction(actions.Registation_Error);

export const LoginRequest = createAction(actions.Login_Request);
export const LoginSuccess = createAction(actions.Login_Sucess);
export const LoginError = createAction(actions.Login_Error);

export const ListPollRequest = createAction(actions.List_PollRequest);
export const ListPollSuccess = createAction(actions.List_PollSuccess);
export const ListPollError = createAction(actions.List_PollError);

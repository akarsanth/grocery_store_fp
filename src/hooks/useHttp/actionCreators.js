import { REQUESTING, SUCCESS, ERROR } from "./actionTypes";

export const requesting = () => ({ type: REQUESTING });
export const success = (response) => ({ type: SUCCESS, response });
export const error = (response) => ({ type: ERROR, response });

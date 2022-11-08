import { REQUESTING, SUCCESS, ERROR } from "./actionTypes";

export const initialState = {
  status: null,
  response: null,
};

const reducer = (state = initialState, { type, response } = {}) => {
  switch (type) {
    case REQUESTING:
      return { ...initialState, status: REQUESTING };
    case SUCCESS:
      return { ...state, status: SUCCESS, response };
    case ERROR:
      return { ...state, status: ERROR, response };
    default:
      return state;
  }
};

export default reducer;

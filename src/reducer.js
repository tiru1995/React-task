import { DISPLAY_LIST, DISPLAY_DETAIL } from './action'

export const reducer = (state={current:'',data:[]}, action) => {
  switch(action.type) {
      case DISPLAY_LIST:
      return { ...state, ...{data:action.payload }};
      break;

      case DISPLAY_DETAIL:
      return { ...state, current:action.payload };
      break;

      default:
      return state;
  }
}
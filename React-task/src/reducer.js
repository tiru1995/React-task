import { DISPLAY_LIST, DISPLAY_DETAIL,DELETED_ITEM } from './action'

export const reducer = (state={current:'',data:[],newuser:{}}, action) => {
  switch(action.type) {
      case DISPLAY_LIST:
      return { ...state, ...{data:action.payload }};
      break;

      case DISPLAY_DETAIL:
      return { ...state, current:action.payload };
      break;

      case DELETED_ITEM:
      return { ...state, ...{data:action.payload }};
      break;
      
      case 'SAVEDATA':
      return {...state, data:[...state.data, action.payload]}
      break;

      default:
      return state;
  }
}
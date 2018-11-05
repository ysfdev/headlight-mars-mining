import {BOTS_FETCH_SUCCEEDED} from '../constants/action-types';

export default (state = [], action) => {
  switch(action.type) {
    case BOTS_FETCH_SUCCEEDED:
      return (action.payload && action.payload.Bots) || [];
    default:
      return state;
  }
}  
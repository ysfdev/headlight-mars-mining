import {BOTS_FETCH_FAILED, NODES_FETCH_FAILED} from '../constants/action-types';

export default (state = null, action) => {
  switch(action.type) {
    case BOTS_FETCH_FAILED:
    case NODES_FETCH_FAILED:
      return {
        type: action.type,
        reason: action.payload
      };
    default:
      return state;
  }
}  
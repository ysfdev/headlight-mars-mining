import {NODES_FETCH_SUCCEEDED} from '../constants/action-types';

export default (state = [], action) => {
  switch(action.type) {
    case NODES_FETCH_SUCCEEDED:
      return (action.payload && action.payload.Nodes) || [];
    default:
      return state;
  }
}
import {NODES_FETCH_SUCCEEDED} from '../constants/action-types';
import {getActiveLocations} from './helpers';

export default (state = {}, action) => {
  switch(action.type) {
    case NODES_FETCH_SUCCEEDED:
       const nodes = (action.payload && action.payload.Nodes) || []; 
      return getActiveLocations(nodes);
    default:
      return state;
  }
}
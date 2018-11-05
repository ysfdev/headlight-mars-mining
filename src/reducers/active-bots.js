import {BOTS_FETCH_SUCCEEDED} from '../constants/action-types';
import {getActiveLocations} from './helpers';

export default (state = {}, action) => {
  switch(action.type) {
    case BOTS_FETCH_SUCCEEDED:
       const bots = (action.payload && action.payload.Bots) || []; 
      return getActiveLocations(bots);
    default:
      return state;
  }
}
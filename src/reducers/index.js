import {combineReducers} from 'redux';
import nodes from './nodes';
import bots from './bots';
import activeNodesLocations from './active-nodes';
import activeBotsLocations from './active-bots';
import fetchingError from './fetching-error';

export default combineReducers({
  nodes,
  activeNodesLocations,
  bots,
  activeBotsLocations,
  fetchingError
});
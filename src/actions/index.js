import {
  NODES_FETCH_REQUESTED,
  NODES_FETCH_FAILED,
  NODES_FETCH_SUCCEEDED,
  BOTS_FETCH_REQUESTED,
  BOTS_FETCH_SUCCEEDED,
  BOTS_FETCH_FAILED
} from '../constants/action-types';

/**
 * NODES ACTIONS
 */
export const requestNodes = (params) => ({
  type: NODES_FETCH_REQUESTED,
  payload: params
})

export const nodesFetchFailed = (err) => ({
  type: NODES_FETCH_FAILED,
  payload: err.message
});

export const nodesFetchSucceeded = (nodes) => ({
  type: NODES_FETCH_SUCCEEDED,
  payload: nodes
});

/**
 * BOTS ACTIONS
 */
export const requestBots = (params) => ({
  type: BOTS_FETCH_REQUESTED,
  payload: params
})

export const botsFetchFailed = (err) => ({
  type: BOTS_FETCH_FAILED,
  payload: err.message
});

export const botsFetchSucceeded = (bots) => ({
  type: BOTS_FETCH_SUCCEEDED,
  payload: bots
});


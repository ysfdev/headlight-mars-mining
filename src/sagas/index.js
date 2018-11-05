import { call, put, takeEvery, fork, all} from 'redux-saga/effects';
import {fetchBots, fetchNodes} from '../services/Mineral';
import {NODES_FETCH_REQUESTED, BOTS_FETCH_REQUESTED} from '../constants/action-types';
import {
  nodesFetchSucceeded,
  nodesFetchFailed,
  botsFetchSucceeded,
  botsFetchFailed
} from '../actions';


export function* doFetchNodes(action = {}) {
  try {
     const nodes = yield call(fetchNodes, action.payload);
     yield put(nodesFetchSucceeded(nodes));
  } catch (err) {
     yield put(nodesFetchFailed(err));
  }
}

export function* watchFetchNodes() {
  yield takeEvery(NODES_FETCH_REQUESTED, doFetchNodes);
}

export function* doFetchBots(action) {
  try {
     const bots = yield call(fetchBots);
     yield put(botsFetchSucceeded(bots));
  } catch (err) {
     yield put(botsFetchFailed(err));
  }
}

export function* watchFetchBots() {
  yield takeEvery(BOTS_FETCH_REQUESTED, doFetchBots);
}

export default function * rootSaga() {
  yield all([
    fork(doFetchNodes), 
    fork(doFetchBots), 
  ])
}
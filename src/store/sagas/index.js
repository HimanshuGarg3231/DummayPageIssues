/**
 * @jest-environment node
 */

import {
  takeLatest, call, put, fork,
} from 'redux-saga/effects';
import {
  fetchGitIssuesFailure,
  fetchGitIssuesSuccess, fetchRepoInfoFailure, fetchRepoInfoSuccess, updateCounter
} from '../../store/actions';
import { fetchIssues } from '../../api/fetchIssues';
import {
  FETCH_ISSUES_REQUEST, FETCH_REPOINFO_REQUEST, UPDATE_COUNTER,
} from '../../store/actions/constants';
import { fetchRepoInfo } from '../../api/fetchRepoInfo';


export function* workerSaga(fn, success, failure) {
  try {
    const response = yield call(fn);
    yield put(success(response.data));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(failure(error));
  }
}

export function* watcherSaga(action, fn, success, failure) {
  yield takeLatest(action, workerSaga.bind(null, fn, success, failure));
}

export function* fetchGithubIssues() {
  yield call(watcherSaga, FETCH_ISSUES_REQUEST,
    fetchIssues, fetchGitIssuesSuccess, fetchGitIssuesFailure);
}

export function* fetchGithubRepoInfo() {
  yield call(watcherSaga, FETCH_REPOINFO_REQUEST,
    fetchRepoInfo, fetchRepoInfoSuccess, fetchRepoInfoFailure);
}

export function* updatenewCounter() {
  yield call(watcherSaga, UPDATE_COUNTER, updateCounter)
}


export default function* rootSaga() {
  yield fork(fetchGithubIssues);
  yield fork(fetchGithubRepoInfo);
  yield fork(updatenewCounter);
}

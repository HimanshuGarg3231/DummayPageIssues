import {
  FETCH_ISSUES_FAILURE,
  FETCH_ISSUES_REQUEST,
  FETCH_ISSUES_SUCCESS, FETCH_REPOINFO_FAILURE,
  FETCH_REPOINFO_REQUEST,
  FETCH_REPOINFO_SUCCESS,
  UPDATE_COUNTER,
} from './constants';


export function fetchGitIssues() {
  return {
    type: FETCH_ISSUES_REQUEST,
  };
}


export function fetchGitIssuesSuccess(issues) {
  return {
    type: FETCH_ISSUES_SUCCESS,
    issues,
  };
}

export function updateCounter(state) {
  return {
    type: UPDATE_COUNTER,
    payload: state,
  }
}

export function fetchGitIssuesFailure(error) {
  return {
    type: FETCH_ISSUES_FAILURE,
    error,
  };
}


export function fetchRepoInfo() {
  return {
    type: FETCH_REPOINFO_REQUEST,
  };
}


export function fetchRepoInfoSuccess(repoInfo) {
  return {
    type: FETCH_REPOINFO_SUCCESS,
    repoInfo,
  };
}


export function fetchRepoInfoFailure(error) {
  return {
    type: FETCH_REPOINFO_FAILURE,
    error,
  };
}

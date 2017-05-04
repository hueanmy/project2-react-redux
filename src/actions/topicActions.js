import * as types from './actionTypes';
import axios from 'axios';
import topics from '../sample_data/topics';

const root_url = 'https://project-2-ltu-06.herokuapp.com/';
var config = {
  headers: {'Authorization': `Bearer ${sessionStorage.jwt}`}
};

export function loadTopicsSuccess(topics) {
  return {
    type: types.LOAD_TOPICS_SUCCESS,
    topics: topics
  }
}

export function loadTopics() {
  return function (dispatch) {
    return axios.get(root_url + 'topics', config)
      .then(response => {
        dispatch(loadTopicsSuccess(response.data.data.concat(topics)));
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
}
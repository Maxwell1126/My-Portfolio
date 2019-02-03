import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_TAGS', getTags);
    yield takeEvery('FETCH_PROJECTS', getProjects);
    yield takeEvery('ADD_PROJECT', addProject);
}

function* getTags(action){
    try{
        const response = yield axios.get('/tags');
        const tags = { type: 'SET_TAGS', payload: response.data};
        yield put(tags);
    }catch(error){
        console.log('Error gettings tags.');
        alert('there was a problem getting tags.')
    }
}

function* getProjects(action) {
    try {
        const response = yield axios.get('/project');
        const projects = { type: 'SET_PROJECTS', payload: response.data };
        yield put(projects);
    } catch (error) {
        console.log('Error making GET request');
        alert('there was a problem');
    }
}
function* addProject(action) {
    try {
        yield axios.post('/project', action.payload);
        const project = { type: 'FETCH_PROJECTS' };
        yield put(project);
    } catch (error) {
        console.log('Error making POST request');
        alert('there was a problem');
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();

import {put, takeEvery, call} from 'redux-saga/effects'
export function* sagaWatcher() {
    yield takeEvery('INCREMENT', sagaWorker)
}

function* sagaWorker() {
    const payload = yield call(fetchpost)
    yield put(console.log(payload))
}

async function fetchpost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}
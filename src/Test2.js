import React, { useState, useEffect, useRef} from 'react';
import { applyMiddleware, createStore } from "redux";
import rootReducer from './rootReducer';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk'
import { decrement, increment, asyncIncrement } from './action';
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './sagas';


function Test2(props) {
    const saga = createSagaMiddleware()

    const store = createStore(rootReducer, 0, applyMiddleware(thunk, saga));

    // const [s1, setS1] = useState(0);
    let test = useRef();
    const buttonHandlerIncrement = () => {
        // console.log('work')
        // let val = s1;
        // val++;
        // setS1(val)
        store.dispatch(increment())
        // console.log(Button);
    }

    saga.run(sagaWatcher)

    const buttonHandlerDecrement = () => {
        // console.log('work')
        // let val = s1;
        // val++;
        // setS1(val)
        store.dispatch(decrement())
    }

    const buttonHandlerAsyncIncrement = () => {
        store.dispatch(asyncIncrement())
    }

    store.subscribe( () => {
        
        const state = store.getState()
        test.current.value = state

    })


    // useEffect(() => {
    //     console.log('use effect');

    //     return function cleanup() {
    //         console.log('component will unmount')
    //       };
    // })

    // console.log('render 1');

    return (
        <>
            {/* {console.log('render 2')} */}
            
            <div style={{ margin: '1rem' }}>
                <button onClick={buttonHandlerIncrement}>Push +</button>
                <button onClick={buttonHandlerDecrement}>Push -</button>
                <button onClick={buttonHandlerAsyncIncrement}>Push async</button>
            </div>
            <div style={{ margin: '1rem' }}>
                {/* {s1} */}
                <input ref={test}></input>
            </div>
        </>
    )
}

export default Test2;
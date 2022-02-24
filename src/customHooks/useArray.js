import {useState, useRef, useEffect} from 'react';

export const useArray = (initialArray = []) => {
    console.log('Custom hook render STARTED'); // [Lifecycle]

    // [useRef] - The returned object will persist for the full lifetime of the component.
    // this means that we can mutate the current value without re-rendering 
    // [useRef] - it is best to store mutable values as refs because we get free memory cleanup for them
    // as opposed to storing the value in the global scope
    const initialList = useRef(initialArray); // {current: null}
    const [list, setList] = useState(() => {
        console.log('Lazy init list value') // [Lifecycle] - maybe talk a bit about lazy init
        return initialArray
    });

    console.log('WHILE RENDERING', {newList: list, prevList: initialList.current}) // [useRef]

    // [Lifecycle] - useEffect hooks are created during render time, but they run AFTER painting
    // they are called in their definition order
    useEffect(() => {
    /////
        // debugger; // [2. Lifecycle] - Show that useEffect runs after component is available in the DOM
        console.log('list was UPDATED') // [1. Lifecycle] - this logs in the console after render ENDED 
        // because useEffect runs after the component becomes available in the DOM
    /////

        // console.log('list was UPDATED', {newList: list, prevList: initialList.current}) // [useRef]

        // [useRef] - Why is initialList.current retured as prev value?
        // Because this assignment gets executed after the component renders and because useRef doens't have a setter function
        // we don't trigger a re-render. Here we just prepare the initialList.current for the next change that will occur
        initialList.current = list

        // console.log('initialList list was UPDATED', {newList: list, prevList: initialList.current}) // [useRef]
    }, [list])

    const isEmpty = () => list.length === 0;
    
    const add = (element) => {
        setList((currentList) => [...currentList, element])
    }

    const remove = (index) => {
        setList((currentList) => currentList.filter((element, i) => i !== index))
    }

    const clear = () => {
        if (isEmpty()) {
            return;
        }
        setList([])
    }

    console.log('Custom hook render ENDED'); // [Lifecycle]
    // console.log('initialList when render ENDED', initialList.current) // [useRef]
    return {
        previousList: initialList.current,
        list,
        isEmpty,
        add,
        remove,
        clear
    }
}
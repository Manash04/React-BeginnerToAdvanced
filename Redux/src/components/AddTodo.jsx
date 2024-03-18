import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Corrected import statement
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
            <input
                type="text"
                className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' // Corrected class name 'trnsition-colors' to 'transition-colors'
                placeholder='Enter a Todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn">Add Todo</button> {/* Added type="submit" and a text for the button */}
        </form>
    );
}

export default AddTodo;

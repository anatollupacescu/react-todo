import React from 'react';
import './App.css';
import TodoForm from './component/TodoForm';

export default function App() {

  let items = [
    { text: 'Learn JavaScript', done: false },
    { text: 'Learn React', done: false },
    { text: 'Play around in JSFiddle', done: true },
    { text: 'Build something awesome', done: true },
  ];

  return (
    <TodoForm items={items} />
  );
}

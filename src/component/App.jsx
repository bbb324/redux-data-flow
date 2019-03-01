import React from 'react';
import AddTodo from './AddTodo.jsx';
import VisibleTodoList from './VisibleTodoList.jsx';

import Footer from './Footer.jsx';
const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;

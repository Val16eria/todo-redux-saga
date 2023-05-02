import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { TodoList } from './features/todo/view';
import { Card } from './features/todo/card';

const  App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<TodoList />}>
        <Route path='/:filter' element={<TodoList />} />
      </Route>
      <Route path='/card/:id' element={<Card />} />
    </Routes>
  );
}

export default App;

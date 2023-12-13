import React from 'react';
import { Component, Component2 } from './Component';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <h1>
        <Header />
        Welcome
        <Component />
        <Component2 />
        <Button button={'Нажми на меня'} />
        <Button button={'OK'} />
        <Button button={'Отмена'} />
      </h1>

      <Footer content={'© 2023 Мой Футер'} />
    </div>
  );
}

export default App;

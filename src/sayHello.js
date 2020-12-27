import React from 'react';

const sayHello = () => {
  console.log('my hello');
}

function Hello() {
  return (
    <div>
      <h3>This is the hello component</h3>
      <button onClick={sayHello}>Say Hello</button>
    </div>
  )
}

export default Hello;
import React, { useState } from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';

function AppLearn() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    { name: 'Ed', message: "Hello there" },
    { name: 'Snow', message: "Awesome" },
  ]);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="applearn">
      <div>
        <h1>This is the app component</h1>
        <Hello />
      </div>
      <div className="tweetcontainer">
        <Tweet name="Fire Sales" message="This is a randomized tweet" />
        <Tweet name="Daily Special" message="No deal is good deal" />
      </div>
      <div className="countercontainer">
        <h1 className={isRed ? "red" : ""}>Change my color</h1>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
      </div>
      <div className="user">
        {users.map(user => (
          <Tweet name={user.name} message={user.message} />
        ))}
      </div>
    </div>
  );
}

export default AppLearn;
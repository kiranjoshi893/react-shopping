import * as React from 'react';
import './style.css';

export default function App() {
  console.log(process.env, 'REACT_APP_PROJECT_ENV')
  return (
    <div>
      <h1>Hello there!</h1>
    </div>
  );
}

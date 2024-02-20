import React, { useState } from 'react';
import style from './Counter.module.css';
function Counter() {
  let [count,setCount] = useState(0);
  const changeCounter = () => {
    setCount(count+1);
  }
  return (
    <>
        <button className={style.bg} onClick={changeCounter}>Malak Taha {count}</button>
    </>
  )
}

export default Counter
import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount;
    count > data.length ? amount = data.length-1 : count < 0 ? amount = 1 : amount = parseInt(count);
    setText(data.slice(0, amount))
  };

  return (
    <section className="section-center">
      <h3>Tired of a borig Lorem Ipsum</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          paragraphs:
        </label>
        <input type="number" name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)}/>
        <button type='submit' className='btn'>Send</button>
      </form>
      <article className='lorem'>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
    )

}

export default App;

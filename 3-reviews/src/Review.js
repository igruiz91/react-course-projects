import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];


  const checkValues = (n) => {
    return n>people.length-1 ? 0 : n<0 ? people.length-1 : n
  }

  const nextPerson = () => {
    setIndex((i) => {
      let newIndex = checkValues(i+1);
      return newIndex;
    })
  }
  const prevPerson = () => {
    setIndex((i) => {
      let newIndex = checkValues(i-1)
      return newIndex;
    });
  };
  const randomPerson =  (n) => {
    let x=n;
    while(n === x){
      x = Math.floor(Math.random() * people.length);
    };
    return setIndex(x)
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={() =>randomPerson(index)}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;

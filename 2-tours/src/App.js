import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  const fecthTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fecthTours();
  }, []);



  return loading ? (
    <main>
      <Loading />
    </main>
  ) : tours.length === 0 ? (
      <main>
        <h2>No Tours Left</h2>
        <button onClick={fecthTours} className='btn'>Load Tours</button>
      </main>
    )
  :
  (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
  
}

export default App;

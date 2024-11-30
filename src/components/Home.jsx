import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div className="my-12">
      <h2 className="text-center text-4xl"> Coffees: {coffees.length}</h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4
      "
      >
        {coffees.map(coffee => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;

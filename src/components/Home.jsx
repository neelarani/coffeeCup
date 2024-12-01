import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="my-12">
      <h2 className="text-center text-4xl">
        Available Coffees: {coffees.length}
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 my-24
      "
      >
        {coffees.map(coffee => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;

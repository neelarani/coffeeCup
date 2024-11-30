const CoffeeCard = ({ coffee }) => {
  const { name, quantity, photo } = coffee;
  console.log(photo);

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl ">
      <figure>
        <img src={photo} />
      </figure>
      <div className="justify-between flex">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="card-actions ">
          <div className="join join-vertical">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button className="btn join-item bg-orange-400">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, photo } = coffee;
  console.log(photo);

  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffeee/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Coffee has been deleted.',
                icon: 'success',
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl  container mx-auto">
      <figure>
        <img className="w-full h-80" src={photo} />
      </figure>
      <div className="justify-between flex">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="card-actions ">
          <div className="join join-vertical">
            <button className="btn join-item">View</button>

            <Link to={`/update/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-orange-400"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

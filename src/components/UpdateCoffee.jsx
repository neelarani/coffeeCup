import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, chef, photo, details, quantity, supplier, category } =
    coffee;

  const handleUpdateCoffee = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      quantity,
      category,
      details,
      photo,
    };
    fetch(`http://localhost:5000/coffeee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Update Coffee!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleUpdateCoffee} className="card-body">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="coffee name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                placeholder="chef name"
                defaultValue={chef}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="coffee supplier"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="quantity"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="coffee Category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Coffee Details"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Coffee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;

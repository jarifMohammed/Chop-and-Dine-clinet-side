

const FoodCard = ({item}) => {
    const {name, image , price ,recipe} = item
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <p className="absolute right-0 mr-4 mt-4 px-4 bg-blue-gray-800 text-white ">${price}</p>
  <div className="card-body text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className=" btn btn-outline border-0 border-b-4 mt-4">Add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;
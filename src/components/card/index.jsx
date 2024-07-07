const Card = ({ projet }) => {
  return (
    <div className='card-container'>
      <div className='card-header'>
        <h2>{projet.title}</h2>
      </div>
      <div className='card-body'>
        <img src={projet.img} alt={projet.title} />
      </div>
      <div className='card-footer'>
        <p>{projet.description}</p>
      </div>
    </div>
  );
};
export default Card;

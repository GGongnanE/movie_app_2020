import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){
  
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'samgyeopsal',
    image: 'https://image.chosun.com/sitedata/image/201902/24/2019022401106_0.jpg',
    rating: 4.9,
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  console.log(foodILike.map(renderFood));
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;

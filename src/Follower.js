import React from 'react'

const Follower = ({url,breeds}) => {
  const deafaultname = "dog"
  const unknownTemperament ="haven't been figured out yet :(";
  
  return (
    <article className="card">
      <img src={url} alt="" />
      <h4>{(breeds && breeds[0] && breeds[0].name) || deafaultname}</h4>
      <h3>temperament:</h3>
      <p>{(breeds && breeds[0] && breeds[0].temperament) || unknownTemperament}</p>
    </article>
  );
}

export default Follower

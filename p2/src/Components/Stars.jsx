import { useState } from "react";

import { Rating } from "react-simple-star-rating";

const Stars = ({ note }) => {
  const [rating, setRating] = useState(); // initial rating value

  // Catch Rating value

  return <Rating readonly={true} size={15} initialValue={note} transition />;
};

export default Stars;

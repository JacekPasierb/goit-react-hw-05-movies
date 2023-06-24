import { useParams } from "react-router-dom";
import { getReviews } from "../../Services/Api";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const { movieId } = useParams();
  
  useEffect(() => {
    getReviews(movieId).then((data) => setReviewsList(data.results));
  },[movieId])
  return (
    <ul>
      {reviewsList.length > 0
        ? reviewsList.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        : "Sorry, we don't have any review for this movie"}
    </ul>
  );
};
export default Reviews;

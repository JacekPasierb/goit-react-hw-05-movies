import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../Services/Api";
import { useEffect, useState } from "react";
import { CastList, CastItem, Img } from "./Cast.styled";

const Cast = () => {
  const [castList, setCastList] = useState([])
    const { movieId } = useParams();
  useEffect(() => {
   getMovieCredits(movieId).then((data) => setCastList(data.cast));
},[movieId])
   
  return (
    <CastList>
      {castList.length > 0
        ? castList.map(({ id, name, profile_path, character }) => (
            <CastItem key={id}>
              <Img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `/src/Images/path404.jpg`
                }
                alt="actor"
              loading="lazy"
              width="120"
                height="180"
              />
              <h3>{name}</h3>
              <p> Character: {character}</p>
            </CastItem>
          ))
        : "Sorry, there isn't any info :("}
    </CastList>
  );
};
export default Cast;

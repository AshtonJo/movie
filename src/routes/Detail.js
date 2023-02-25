import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year/movie_id=${id}`)).json();
    console.log(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return <div>{loading ? <h1>Loading...</h1> : <div></div>}</div>;
}
export default Detail;

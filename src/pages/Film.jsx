import Row from "../layouts/Row";
import requests from "../Requests";

const Film = () => {
  return (
    <div className="mb-[8rem]">
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="War" fetchURL={requests.requestWar} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row title="TopRated" fetchURL={requests.requestTopRated} />
      <Row title="Cartoon" fetchURL={requests.requestAnimation} />
      <Row title="Drama" fetchURL={requests.requestDrama} />
      <Row title="Family" fetchURL={requests.requestFamily} />
    </div>
  );
};

export default Film;

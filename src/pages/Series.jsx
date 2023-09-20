import Row from "../layouts/Row";
import requests from "../Requests";

const Series = () => {
  return (
    <div className="mb-[8rem]">
      <Row title="Comedy" fetchURL={requests.tvComedy} />
      <Row title="News" fetchURL={requests.tvNews} />
      <Row title="Talk" fetchURL={requests.tvTalk} />
      <Row title="Reality" fetchURL={requests.tvReality} />
      <Row title="Fantasy" fetchURL={requests.tvFantasy} />
      <Row title="Western" fetchURL={requests.tvWestern} />
      <Row title="Politics" fetchURL={requests.tvPolitics} />
      <Row title="Animation" fetchURL={requests.tvAnimation} />
    </div>
  );
};

export default Series;

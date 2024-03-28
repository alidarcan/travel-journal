export default function Card(props) {
  return (
    <div className="card">
      <img
        className="info--img"
        src={props.img}
        alt={props.location}
      />
      <div className="card--info">
        <div className="info--top">
          <img src="/images/location.png" alt={props.location} />
          <p className="info--location">{props.location}</p>
          <a className="info--location-link" href="https://www.alidarcan.com/">
            View on Google Maps
          </a>
        </div>
        <p className="info--title">{props.title}</p>
        <p className="info--date">{props.startDate} - {props.endDate}</p>
        <p className="info--text">{props.content}</p>
      </div>
    </div>
  );
}

interface PlaceDetails {
  title: string;
  location: string;
  map: string;
  description: string;
  image: string;
  alternate: string;
}

function NewEntry(props: PlaceDetails): JSX.Element {
  return (
    <>
      <div className="entry">
        <h2 className="country-title">{props.title}</h2>
        <img src={props.image} alt={props.alternate} />
        <h4>
          <a href={props.map}>{props.location} </a>
        </h4>
        <p className="description">{props.description}</p>
      </div>
    </>
  );
}

export default NewEntry;

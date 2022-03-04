interface PlaceDetails {
  title: string;
  location: string;
  map: string;
  description: string;
}

function NewEntry(props: PlaceDetails): JSX.Element {
  return (
    <>
      <h2>{props.title}</h2>
      <p>Image</p>
      <h4>
        {props.location} (<a href={props.map}>map link</a>)
      </h4>
      <p>{props.description}</p>
    </>
  );
}

export default NewEntry;

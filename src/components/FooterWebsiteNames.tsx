interface WebsiteNames {
  name1: string;
  name2: string;
  name3: string;
  name4: string;
}

export default function NameEntry(props: WebsiteNames): JSX.Element {
  return (
    <nav className="website-links">
      <a href="#" className="website-link">
        {props.name1} website
      </a>{" "}
      |
      <a href="#" className="website-link">
        {props.name2} website
      </a>{" "}
      |
      <a href="#" className="website-link">
        {props.name3} website
      </a>{" "}
      |
      <a href="#" className="website-link">
        {props.name4} website
      </a>
    </nav>
  );
}

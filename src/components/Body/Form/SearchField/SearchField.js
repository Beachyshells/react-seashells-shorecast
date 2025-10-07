import "./SearchField.css";
export default function SearchField(props) {
  return (
    <div className="SearchField">
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={props.onCityChange}
        value={props.city}
      />
      <input className="button" type="submit" value="Search" />
    </div>
  );
}

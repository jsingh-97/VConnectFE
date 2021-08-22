function FeedItem(props) {
  return (
    <ul>
      <li>{props.item.email}</li>
      <li>{props.item.designation}</li>
      <li>{props.item.company}</li>
      <li>{props.item.city}</li>
    </ul>
  );
}
export default FeedItem;

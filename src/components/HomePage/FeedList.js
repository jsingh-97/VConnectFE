import FeedItem from "./FeedItem";

function FeedList() {
  const list = [
    {
      id: 12,
      email: "testemail@gmail.com",
      designation: "Software developer",
      company: "Expedia",
      minExp: 1,
      maxExp: 3,
      city: "Bangalore",
    },
    {
      id: 11,
      email: "testemail2@gmail.com",
      designation: "Software developer 2",
      company: "Paytm",
      minExp: 0,
      maxExp: 2,
      city: "Noida",
    },
    {
      id: 10,
      email: "dummy@gmail.com",
      designation: "Front end developer",
      company: "Samsung",
      minExp: 1,
      maxExp: 3,
      city: "Bangalore",
    },
    {
      id: 9,
      email: "abc@gmail.com",
      designation: "Software developer",
      company: "Walmart",
      minExp: 3,
      maxExp: 5,
      city: "Bangalore",
    },
  ];
  return (
    <div>
      <h1>You are logged In</h1>
      <ul>
        {list.map((item) => (
          <FeedItem key={item.id} item={item}></FeedItem>
        ))}
      </ul>
    </div>
  );
}

export default FeedList;

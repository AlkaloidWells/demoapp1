function Hello(props) {
  return (
    <div>
      <h1>
        {" "}
        Hello {props.person.emoji} {props.person.name} welcome to your {props.person.count} try!  Seat Numbers: {props.person.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;


function Thread(props) {
  const active = props.online / props.memebrs
  return (
    <>
      <h3>Subreddit name: {props.threadName} </h3>
      <h3>Members: {props.members}</h3>
      <h3>Online: {props.online}</h3>
      <h4>Active: {active}% </h4>
    </>
  );
}

export default Thread;
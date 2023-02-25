
function Thread(props) {
  const activePercent = props.online / props.memebrs
  return (
    <>
      <h3>Subreddit name: {props.displayName} </h3>
      <h3>Members: {props.subscribers}</h3>
      <h3>Online: {props.accounsActive}</h3>
      <h4>Active: {activePercent}% </h4>
    </>
  );
}

export default Thread;
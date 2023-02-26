import PropTypes from "prop-types";

function Thread(props) {
  const activePercent = props.accountsActive / props.subscribers
  return (
    <>
      <h3>Subreddit name: {props.displayName} </h3>
      <h3>Members: {props.subscribers}</h3>
      <h3>Online: {props.accountsActive}</h3>
      <h4>Active: {activePercent}% </h4>
    </>
  );
}

Thread.propTypes = {
  displayName: PropTypes.string,
  subscribers: PropTypes.number,
  accountsActive: PropTypes.number,
}

export default Thread;
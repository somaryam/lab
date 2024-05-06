 function Message({
    name,
    job,
    age,
  }) {
    return (
      <p className="alert alert-success">
        This is a message from <b>{name} </b> who is a <b>{job}</b>, and he is {" "} <b>{age}</b>
        years old.
      </p>
    );
  }
  export default Message; 
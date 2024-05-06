function Team({
    name,
    title,
  }) {
    let message;
    let className;

    if (title > 9) {
        message = `${name} a remporté "${title}" titres`;
        className = "alert alert-success";
    } else if (title > 0) {
        message = `${name} a remporté "${title}" titres`;
        className = "alert alert-warning";
    } else {
        message = `${name} n'a remporté aucun titre`;
        className = "alert alert-danger";
    }

    return (
      <p className={className}>
        <b>{message}</b>
      </p>
    );
  }

export default Team;

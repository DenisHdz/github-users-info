import React from "react";

const Card = props => {
  const { avatar_url, name, bio } = props;

  return (
    <div style={{ margin: "1em" }}>
      <img alt="avatar" style={{ width: "70px" }} src={avatar_url} />
      <div>
        <div style={{ fontWeight: "bold" }}>{name}</div>
        <div>{bio}</div>
      </div>
    </div>
  );
};

export default Card;

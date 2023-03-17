import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Small rendered");
  return <small>{value}</small>;
});

import React from "react";

interface ResultProps {
  id: string;
  password: string;
}
const Result = ({ id, password }: ResultProps) => {
  return (
    <div>
      <p>id : {id}</p>
      <p>password : {password}</p>
    </div>
  );
};

export default Result;

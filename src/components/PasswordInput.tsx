import React, { useState } from "react";

interface passwordInputProps {
  onNext: (password: string) => void;
}

const PasswordInput = ({ onNext }: passwordInputProps) => {
  const [input, setInput] = useState<string>("");

  return (
    <div>
      <input type="password" onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          onNext(input);
        }}
      >
        버튼
      </button>
    </div>
  );
};

export default PasswordInput;

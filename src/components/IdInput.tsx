"use client";

import React, { useState } from "react";

interface IdInputProps {
  onNext: (data: string) => void;
}

const IdInput = ({ onNext }: IdInputProps) => {
  const [input, setInput] = useState<string>("");

  return (
    <div>
      <p>input</p>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
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

export default IdInput;

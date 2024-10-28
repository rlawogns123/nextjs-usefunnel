"use client";

import IdInput from "./IdInput";
import PasswordInput from "./PasswordInput";
import React from "react";
import Result from "./Result";
import { useFunnel } from "@use-funnel/browser";

const Signup = () => {
  const funnel = useFunnel<{
    id: { id?: string; password?: string };
    password: { id: string; paswword?: string };
    result: { id: string; password: string };
  }>({
    id: "signup",
    initial: {
      step: "id",
      context: {},
    },
  });
  return (
    <div>
      <funnel.Render
        id={({ history }) => (
          <IdInput
            onNext={(id) => {
              history.push("password", { id: id });
            }}
          />
        )}
        password={({ history, context }) => (
          <PasswordInput
            onNext={(password) => {
              history.push("result", { ...context, password: password });
            }}
          />
        )}
        result={({ context }) => (
          <Result id={context.id} password={context.password} />
        )}
      />
    </div>
  );
};

export default Signup;

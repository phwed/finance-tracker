// if component that takes a boolean and a component as props

import React from "react";

interface IfProps {
  condition: boolean;
  then: React.ReactNode | JSX.Element;
  else?: React.ReactNode | JSX.Element;
}

export default function If(props: IfProps) {
  return props.condition ? props.then : props.else;
}

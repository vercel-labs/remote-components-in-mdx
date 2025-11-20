"use client";

import { RemoteComponentWrapper } from "./remote-component-wrapper";



export default function RemoteClientCounter() {
  return (
    <RemoteComponentWrapper src="http://localhost:4000/remote-components/counter?name=client" />
  );
}

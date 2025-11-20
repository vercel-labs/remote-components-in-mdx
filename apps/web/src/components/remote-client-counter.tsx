"use client";

import { RemoteComponentWrapperClient } from "@/components/remote-component-wrapper-client";

export default function RemoteClientCounter() {
  return (
    <RemoteComponentWrapperClient src="http://localhost:4000/remote-components/counter?name=client" />
  );
}

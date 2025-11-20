import { RemoteComponentWrapper } from "@/components/remote-component-wrapper";

export default function RemoteCounter() {
  return (
    <RemoteComponentWrapper src="http://localhost:4000/remote-components/counter?name=server" />
  );
}

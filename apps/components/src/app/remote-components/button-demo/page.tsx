import ButtonDemo from "@/components/button-demo";
import { RemoteComponent } from "remote-components/next/remote";

export default async function ButtonDemoPage() {
  return (
    <RemoteComponent>
      <ButtonDemo />
    </RemoteComponent>
  );
}


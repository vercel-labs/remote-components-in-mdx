import { RemoteComponent } from "remote-components/next/host";

function replaceHost(url: string): string {
  const remoteHost = process.env.NEXT_PUBLIC_REMOTE_COMPONENT_HOST;
  if (!remoteHost) {
    return url;
  }
  return url.replace("http://localhost:4000", remoteHost);
}

export function RemoteComponentWrapper({
  src,
  ...props
}: {
  src: string;
  [key: string]: unknown;
}) {
  const resolvedSrc = replaceHost(src);
  return <RemoteComponent src={resolvedSrc} {...props} />;
}


"use client";

import { RemoteComponent } from "remote-components/next/host/client";

function replaceHost(url: string): string {
  const remoteHost = process.env.NEXT_PUBLIC_REMOTE_COMPONENT_HOST;
  if (!remoteHost) {
    return url;
  }

  try {
    const urlObj = new URL(url);
    let hostToUse = remoteHost;
    
    try {
      const envUrl = new URL(remoteHost);
      hostToUse = envUrl.host;
    } catch {
      hostToUse = remoteHost;
    }
    
    urlObj.host = hostToUse;
    return urlObj.toString();
  } catch {
    return url;
  }
}

export function RemoteComponentWrapperClient({
  src,
  ...props
}: {
  src: string;
  [key: string]: unknown;
}) {
  const resolvedSrc = replaceHost(src);
  return <RemoteComponent src={resolvedSrc} {...props} />;
}


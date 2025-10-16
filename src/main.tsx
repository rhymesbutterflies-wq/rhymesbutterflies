import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import faviconUrl from "./assets/favicon.jpg";

function setFavicon(iconUrl: string) {
  const head = document.head || document.getElementsByTagName("head")[0];
  let linkEl = head.querySelector<HTMLLinkElement>("link[rel~='icon']");
  if (!linkEl) {
    linkEl = document.createElement("link");
    linkEl.rel = "icon";
    head.appendChild(linkEl);
  }
  linkEl.type = "image/png";
  linkEl.href = iconUrl;
}

setFavicon(faviconUrl);

createRoot(document.getElementById("root")!).render(<App />);

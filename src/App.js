import { unstable_ViewTransition as ViewTransition } from "react";

import TalkDetails from "./Details";
import Home from "./Home";
import { useRouter } from "./router";

export default function App() {
  const { url } = useRouter();

  // 🚩This version doesn't include any animations yet
  return (
    <ViewTransition default="slow-fade">
      {url === "/" ? <Home /> : <TalkDetails />}
    </ViewTransition>
  );
}

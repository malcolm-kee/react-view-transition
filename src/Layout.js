import { unstable_ViewTransition as ViewTransition } from "react";
import { useIsNavPending } from "./router";

export default function Page({ heading, children }) {
  const isPending = useIsNavPending();
  return (
    <div className="page">
      <div className="top">
        <div className="top-nav">
          <ViewTransition
            name="nav"
            share={{
              "nav-forward": "slide-forward",
              "nav-back": "slide-back",
            }}
          >
            {heading}
          </ViewTransition>
          {isPending && <span className="loader"></span>}
        </div>
      </div>

      <div className="bottom">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

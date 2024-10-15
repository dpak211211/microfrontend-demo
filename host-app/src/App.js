import React, { useState } from "react";
import reportWebVitals from "../../host-app/src/reportWebVitals";
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <div>{children}</div>
  </div>
);

export const App = () => {
  const [count, setCount] = useState(0)
  const setCountFunc = () => {
    setCount(count+1)
  }
  return (
    <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
      <h1>This is the Host!</h1>
      <h2>Remote App:</h2>
      <RemoteWrapper>
        <RemoteApp count={count} />
      </RemoteWrapper>
      <h2>Remote Button:</h2>
      <RemoteWrapper>
        <RemoteButton setCount={setCountFunc} count={count} />
      </RemoteWrapper>
      <br />
      <a href="http://localhost:4000">Link to Remote App</a>
    </div>
  );
};
export default App;

reportWebVitals();

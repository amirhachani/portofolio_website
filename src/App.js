import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [fade, setFade] = useState("fade_in");

  const effect = () => {
    setTimeout(() => {
      if (fade) {
        setFade("fade_out");
      }
    }, 2000);
  };

  useEffect(() => {
    effect();
  });

  return (
    <div className="messages_wrapper">
      <div className={`header_date ${fade}`}>
        <h1 className="header_date_text">TODAY</h1>
      </div>
      <div>
        <h1 className="first_message">
          Hello There{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
      </div>
      <div>
        <h1 className="second_message">I'm Amir</h1>
      </div>
      <div>
        <h1 className="third_message">I code things on the web</h1>
      </div>
      <div className="flex_wrapper">
        <h1 className="fourth_message">
          I'm currently accepting freelance work.
          <br /> You can contact me at{" "}
          <a href="mailto:hachaniamir@gmail.com">hachaniamir@gmail.com</a>
        </h1>
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/amir-hachani-644937141/">
          linkedIn.com/hachaniamir
        </a>
        <br />
        <a href="https://medium.com/@hachaniamir">medium.com/hachaniamir</a>
        <br />
        <a href="https://github.com/amirhachani">github.com/hachaniamir</a>
      </div>
      <div>
        <h1 className="fifth_message">Have a nice day</h1>
      </div>
      <div>
        <h1 className="sixth_message">
          {" "}
          <span role="img" aria-label="waving hand">
            👀
          </span>{" "}
          H.
        </h1>
      </div>
    </div>
  );
}

export default App;

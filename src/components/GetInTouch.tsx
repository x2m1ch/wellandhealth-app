import { infoMap } from "../pages/home/HomePage";

import "./styles/get-in-touch.css";

interface Input {
  name: string;
  type: "email" | "name" | "message";
}

const INPUTS: Input[] = [
  {
    name: "Name",
    type: "name",
  },
  {
    name: "Email",
    type: "email",
  },
  {
    name: "How can we help?",
    type: "message",
  },
];

const images = [
  "/components/get-in-touch/instagram.svg",
  "/components/get-in-touch/dribble.svg",
  "/components/get-in-touch/linkedin.svg",
  "/components/get-in-touch/envelope.svg",
];

export const GetInTouch = () => {
  const switchInputByType = (type: string) => {
    switch (type) {
      case "name":
        return "Enter your name";
      case "email":
        return "Enter your email";
      case "message":
        return "Enter your message here";
    }
  };

  return (
    <section className="get-in-touch">
      <section className="get-in-touch-info">
        <h2 style={{ color: "white" }}>Get In Touch</h2>

        <section>
          <section className="get-in-touch-images">
            {images.map((image) => (
              <img src={image} alt="" />
            ))}
          </section>
          <section className="get-in-touch-links">
            <p>© 2022 Brand, Inc.</p>
            {infoMap("white")}
          </section>
        </section>
      </section>

      <section className="get-in-touch-inputs">
        {INPUTS.map((input) => (
          <>
            <div className="get-in-touch-input">
              <p>{input.name}</p>
              <input
                  type="text"
                  style={input.type == 'message' ? {paddingBottom: "100px"}: undefined}
                  placeholder={switchInputByType(input.type)}
                />
            </div>
          </>
        ))}

        <button className="get-in-touch-submit">Submit</button>
      </section>
    </section>
  );
};

import play from "/about-us/video/play.svg";
import background from "/about-us/video/video.png";

import "./styles/video.css";

export const Video = () => {
  return (
    <section className="video-section">
      <img src={background} alt="" />
      <button>
        Watch the video
        <img src={play} alt="" />
      </button>
    </section>
  );
};

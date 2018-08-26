import React, { Component } from "react";

const YouTube = ({ className, videoID }) => {
  return (
    <React.Fragment>
      <div className="background">
        <iframe
          title="background"
          src={`https://www.youtube.com/embed/${videoID}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1`}
          frameBorder="0"
          height="100%"
          width="100%"
          allow="autoplay; encrypted-media"
        />
      </div>
      <div class={`container ${className}`}>
        <div className="scale">
          <div className="bbq">
            <div className="spin">
              <div className="bounce">
                <iframe
                  title="background"
                  src={`https://www.youtube.com/embed/${videoID}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1`}
                  frameBorder="0"
                  height="100%"
                  width="100%"
                  allow="autoplay; encrypted-media"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <YouTube className="" videoID="sRBEc4GP7cY" /> */}
        <YouTube className="lemon-glow" videoID="08qd-vsHbaY" />
      </React.Fragment>
    );
  }
}

export default App;

import React from 'react';

const random_bg_color = () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  return 'rgb(' + x + ',' + y + ',' + z + ')';
};

const Box = (props) => {
  let bgColor = { backgroundColor: random_bg_color() };

  return (
    <div className="Box" style={bgColor} onMouseEnter={props.onHover}
      onMouseLeave={props.onLeaveHover}></div>
  );
};

export default Box;

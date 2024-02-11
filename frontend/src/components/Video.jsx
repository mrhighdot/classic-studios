/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

export default function VideoComponent(props) {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <video
      className={props.className}
      style={props.style}
      ref={videoRef}
      loop
      autoPlay
      muted
      playsInline
    >
      <source src={props.video} type="video/webm" />
      <source src={props.video} type="video/mp4" />
    </video>
  );
}

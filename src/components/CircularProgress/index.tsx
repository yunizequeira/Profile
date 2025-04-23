"use client";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Circularprogress = ({
  progress,
  text,
}: {
  progress: number;
  text: string;
}) => {
  return (
    <div className="max-w-xs h-full">
      <CircularProgressbar
        value={progress}
        maxValue={100}
        backgroundPadding={6}
        text={`${progress}%`}
        className="w-full h-24"
        styles={{
          path: {
            stroke: `url(#gradient)`,
            strokeLinecap: "round",
            transition: "stroke-dashoffset 850ms ease 0s",
            transform: "rotate(90deg)",
            transformOrigin: "center center",
          },
          trail: {
            stroke: "#023877",
            strokeLinecap: "round",
            transform: "rotate(90deg)",
            transformOrigin: "center center",
          },
          text: {
            fill: "#ffffff",
            fontSize: "16px",
            fontWeight: "bold",
          },
        }}
      />
      <p className="text-xs font-bold text-center">{text}</p>
    </div>
  );
};

export default Circularprogress;

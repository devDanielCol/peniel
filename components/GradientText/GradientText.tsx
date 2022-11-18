import * as React from "react";
import { styled } from "@mui/system";
import { FC } from "react";
import gradients from "../../styles/colors/gradients";
import { animationOpacity } from "../../styles/animation/keyframes/gradiantText";

type textAlign = "center" | "left" | "right" | "inherit";
interface IProps {
  fontSize: number | string | string[] | number[] | object;
  fontWeight?: "bolder" | number;
  letterSpacing?: string | number;
  legend?: string;
  gradient?: string;
  textAlign?: textAlign | object;
  animation?: "primary" | "secondary" | "finally" | "none";
  children?: string;
}

const GradientText: FC<IProps> = ({
  fontSize,
  legend,
  letterSpacing,
  fontWeight,
  gradient,
  animation,
  children,
  textAlign,
}) => {
  const Prueba = styled("div")({
    ...animationOpacity,
    padding: 0,
    "&::before": {
      content: `"${legend || children || ""}"`,
      backgroundClip: "text",
      color: animation === "none" ? "transparent" : "palette.text",
      position: "absolute",
      letterSpacing: letterSpacing || "0px",
      fontWeight: fontWeight || 800,
      boxSizing: "border-box",
      padding: 0,
      m: 0,
      lineHeight: 1,
    },
  });

  const Title = styled("span")({
    backgroundClip: "text",
    color: "transparent",
    backgroundImage: gradient || gradients.orangeYellow,
    animation: `${animation || "primary"} 8s infinite`,
    letterSpacing: "0px",
    fontWeight: fontWeight || 800,
    zIndex: 1,
    boxSizing: "border-box",
    padding: 0,
    m: 0,
    lineHeight: 1,
  });

  return (
    <Prueba sx={{ fontSize: fontSize, textAlign }}>
      <Title sx={{ fontSize: fontSize, textAlign }}>{legend || children}</Title>
    </Prueba>
  );
};

export default GradientText;

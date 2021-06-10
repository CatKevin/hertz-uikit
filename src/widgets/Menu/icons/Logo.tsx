import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 500 200" {...props} height="60px">
      <image width="500" height="200" href={isDark ? './images/leek/LogoTextNewDark.png' : './images/leek/LogoTextNewWhite.png'} />
    </Svg>
  )
};

export default Logo;

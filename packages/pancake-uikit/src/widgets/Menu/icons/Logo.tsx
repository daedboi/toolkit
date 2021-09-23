import React from "react";
import Svg from "../../../components/Svg/Svg";
import Text from "../../../components/Text/Text";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
      <Text bold={true} font-size="16px">
        Morpheus Swap
      </Text>
  );
};

export default Logo;
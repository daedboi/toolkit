import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://info.spookyswap.finance/token/0x0789ff5ba37f72abc4d561d00648acadc897b32d"
      target="_blank"
    >

      <Text color="textSubtle" bold>PILLS: {`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    // <Skeleton width={80} height={24} />
    <Text></Text>
  );
};

export default React.memo(CakePrice);

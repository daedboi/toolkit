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
  width: 100%;
  align-items: center;
  justify-content: center;
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
      href="https://morpheusswap.app/"
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

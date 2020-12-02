import React from 'react';
import styled from 'styled-components';

import type { SellerDistributorPair as SellerDistributorPairType } from '../../../../utilities/api/types';
import { tabletScreens } from '../../../../utilities/general/responsive';

interface Props {
  sellerDistributorPair: SellerDistributorPairType;
}

const SellerDistributorPair = ({ sellerDistributorPair }: Props) => (
  <Container>
    <MerchantImage>
      <img
        alt="merchant"
        src={sellerDistributorPair.seller_image_url}
        style={{ width: '100%' }}
      />
    </MerchantImage>
    <PairContent>
      <PairText>{sellerDistributorPair.seller_name}</PairText>
      <DistributorImage>
        <img
          alt="distributor"
          src={sellerDistributorPair.distributor_image_url}
          style={{ height: '100%' }}
        />
      </DistributorImage>
    </PairContent>
  </Container>
);

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 9px;
  border: 1px #e5e5e5 solid;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
  width: 270px;
`;

const MerchantImage = styled.div`
  display: flex;

  @media (${tabletScreens}) {
    display: none;
  }
`;

const PairContent = styled.div`
  align-items: center;
  display: flex;
  margin: 12px 8px;
`;

const PairText = styled.div`
  margin-right: 8px;
`;

const DistributorImage = styled.div`
  margin-left: auto;
  height: 28px;
`;

export default SellerDistributorPair;

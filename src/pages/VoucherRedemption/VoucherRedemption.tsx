import React from 'react';
import styled from 'styled-components';
// import StoreBanner from "./StoreBanner"
// import Landing from "./Landing"
// import Location from "./Location"
// import { Logo } from '../../components/Logos';
import Amount from './Amount';
import { VoucherProvider } from '../../utilities/hooks/VoucherContext/context';

interface Props {}

const VoucherRedemption = (props: Props) => {
  return (
    <VoucherProvider>
      <Container>
        <Amount />
        {/* <StoreBanner/>
        <Landing/>
        <Location/>
        <FooterContainer>
          <Logo/>              
        </FooterContainer> */}
      </Container>
    </VoucherProvider>
  );
};

export default VoucherRedemption;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: white;
  flex-direction: column
  height: 100%;
`;

const FooterContainer = styled.div`
  width: 100%%;
  margin: 0 auto;
  background-color: white;
  flex-direction: column
  justify-content: center;
`;

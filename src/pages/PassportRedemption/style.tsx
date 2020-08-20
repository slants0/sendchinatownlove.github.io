import styled from 'styled-components';
import CrawlMap from './CrawlMap.png';

type Props = {
  color?: string;
  bold?: string;
  align?: string;
};

const Container = styled.div`
  background-color: #e5e5e5;
  height: 100%;
  min-height: 100vh;
  background-image: url(${CrawlMap});

  @media (max-width: 475px) {
      background-size: 500px;
  }
`;

const PassportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #dedede;
  border-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;

  &.faq {
      font-size: 12px;
      max-height: 100vh;
  }
`;

const ExternalLink = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  color: black;
  font-size: 12px;
  margin: 20px;
  letter-spacing: .15em;

  &.faq {
      @media (max-width: 365px) {
          margin-left: 8px;
          margin-right: 8px;
  }
`;

const Title = styled.span`
  color: ${props => props.color ? props.color : "black"};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  letter-spacing: .15em;
`;

const SubTitle = styled.span`
  color: ${(props: Props) => props.color ? props.color : "black"};
  font-size: 12px;
  font-weight: ${(props: Props) => props.bold ? props.bold : "400"};
  text-align: ${(props: Props) => props.align ? props.align : "center"};
  letter-spacing: .15em;
`;

const Button = styled.button`
  margin: 20px 0 10px;

  &.linkButton {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    line-spacing: .1em;
    font-weight: bold;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  padding-top: 5px;
`;


export { PassportContainer, Title, SubTitle, Button, ErrorMessage, Container, ExternalLink  };

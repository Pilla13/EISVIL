import { styled } from "styled-components";

const Details = styled.details`
  border-top: 1px solid #ffffff6c;
  border-bottom: 1px solid #ffffff6c;
  transition: 0.35s;

  &[open] {
    background: #1d2434;
  }

  & > p {
    margin: 0px 150px 20px 10px;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export default Details;

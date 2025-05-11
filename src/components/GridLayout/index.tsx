import styled from "styled-components";

const GridLayout = styled.div`
  display: grid;
  grid-template-areas:
    "navbar navbar"
    "sidebar content"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr 50px;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-areas:
      "navbar"
      "content"
      "footer";
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr 50px;
  }
`;

export default GridLayout;
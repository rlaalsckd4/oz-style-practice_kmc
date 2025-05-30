import styled, { createGlobalStyle, css } from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { flexMixin } from "./styled/styled";

export const FlexSection = styled.section`
${flexMixin(undefined, 'center', 'center', '20px', 'wrap')}
  padding: 20px 40px;
`
const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

body {
  background-color: #121212;
}
`

function App() {
  return (
    <main>
      <Header />
      <GlobalStyle />
      <FlexSection>
        {contents.map((el, index) => (
          <Content key={`${el.id}-${index}`} content={el} />
        ))}
      </FlexSection>
    </main>
  );
}

export default App;

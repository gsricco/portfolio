import styled from 'styled-components';


function App() {
    return (
            <Title>
              Portfolio <span> Frontend developer</span>
            </Title>

    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 32px;
    span {
      color: #e91e63;
    }
`;

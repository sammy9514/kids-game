import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Home = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Cards to={"/animalGame"}>
            <Img src="https://img.freepik.com/free-vector/many-cute-animals-bamboo-forest_1308-32851.jpg?w=2000&t=st=1699424182~exp=1699424782~hmac=621ac1b3e5c405f0c6d5033d0ae32e454508abbe6c361cd29a06a022f53ca91e" />
          </Cards>
          <Cards to={"/numberGame"}>
            <Img src="https://img.freepik.com/premium-vector/0-10-cartoon-character-numbers_853066-113.jpg?w=1800" />
          </Cards>
          <Cards to={"/colorGame"}>
            <Img src="https://img.freepik.com/premium-vector/paintbrushes-crayons-white-background_1639-550.jpg?w=2000" />
          </Cards>
        </Wrapper>
      </Container>
    </div>
  );
};

// const Container = styled.div``
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Cards = styled(Link)`
  width: 250px;
  height: 400px;
  border: 8px solid gold;
  border-radius: 15px;
  transition: 150ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  gap: 30px;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${"https://static.vecteezy.com/system/resources/previews/000/913/532/non_2x/cartoon-children-playing-around-books-vector.jpg"});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import { useEffect, useState } from "react";
import styled from "styled-components";
import { viewData, viewSortedData } from "../api/Api";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FaCheck } from "react-icons/fa";
import shuffle from "lodash/shuffle";
import { Link } from "react-router-dom";

export const AnimalMatch = () => {
  const [animal, setAnimal] = useState<any>();
  const [image, setImage] = useState<any>();
  const [sort, setSort] = useState<any>();
  const [isCorrect, setIsCorrect] = useState(
    new Array(animal?.length).fill(false)
  );
  const [time, setTime] = useState(30);
  const [istime, iSetTime] = useState(false);

  useEffect(() => {
    viewData().then((res) => {
      setAnimal(res);
    });
    viewSortedData().then((res) => {
      setImage(res);
    });

    if (istime) {
      let count = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          clearInterval(count);
        }
      }, 1000);
      return () => {
        clearInterval(count);
      };
    }
  }, [time, istime]);
  const checkTime = () => {
    iSetTime(true);
  };

  const onDrag = (res: any) => {
    const { source, destination } = res;
    const data: any = Array.from(animal);
    console.log(data);
    const [newData] = data.splice(source.index, 1);
    data.splice(destination.index, 0, newData);

    const correct = data.map((el: any, index: any) => {
      return el.name === image[index].name;
    });
    setIsCorrect(correct);

    setAnimal(data);
  };

  // const onDragEnd = (result: any) => {
  //   const sourceIndex = result.source.index;
  //   const destIndex = result.destination.index;

  //   const updatedAnimals = [...animal];
  //   const movedAnimal = updatedAnimals.splice(sourceIndex, 1)[0];
  //   updatedAnimals.splice(destIndex, 0, movedAnimal);
  //   const correctnessArray = updatedAnimals.map((animal, index) => {
  //     return animal.name === image[index].name;
  //   });
  //   console.log([...animal]);

  //   setIsCorrect(correctnessArray);
  //   setAnimal(updatedAnimals);
  // };
  const allCorrect = isCorrect.every((correct: any) => correct);
  const shffule = shuffle(animal);

  return (
    <div>
      <DragDropContext onDragEnd={onDrag}>
        <Container>
          <Top>
            <Back to={"/"}>Back</Back>
            <Cap>
              <Time>{time}</Time>
            </Cap>
          </Top>
          <Wrapper>
            {allCorrect ? <Congrats>Congratulations</Congrats> : null}
            <Main>
              <Droppable droppableId="id">
                {(props) => (
                  <Hold {...props.droppableProps} ref={props.innerRef}>
                    {animal &&
                      animal?.map((props: any, i: number) => (
                        <Draggable
                          draggableId={props._id}
                          key={props._id}
                          index={i}
                        >
                          {(prov) => (
                            <ImageHold
                              {...prov.dragHandleProps}
                              {...prov.draggableProps}
                              ref={prov.innerRef}
                            >
                              <Text>{props.name}</Text>
                              {isCorrect[i] ? (
                                <CheckmarkIcon>
                                  <FaCheck />
                                </CheckmarkIcon>
                              ) : null}
                            </ImageHold>
                          )}
                        </Draggable>
                      ))}
                    {props.placeholder}
                  </Hold>
                )}
              </Droppable>
              <Button
                onClick={() => {
                  checkTime();
                  sort;
                }}
              >
                Start
              </Button>
              <Hold>
                {image &&
                  image?.map((props: any) => (
                    <ImageHold>
                      <Img src={props.image} />
                    </ImageHold>
                  ))}
              </Hold>
            </Main>
          </Wrapper>
        </Container>
      </DragDropContext>
    </div>
  );
};
const Back = styled(Link)`
  padding: 15px 30px;
  background-color: green;
  color: whitesmoke;
  border-radius: 10px;
  border: 2px solid whitesmoke;
  font-weight: 600;
  text-decoration: none;
`;
const Time = styled.div`
  padding: 10px;
  border-radius: 50%;
  border: 3px solid white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
`;

const Button = styled.div`
  padding: 15px 30px;
  background-color: green;
  color: whitesmoke;
  border-radius: 10px;
  border: 2px solid whitesmoke;
  font-weight: 600;
`;
const Congrats = styled.div`
  color: whitesmoke;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const CheckmarkIcon = styled.div`
  color: lawngreen;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  color: whitesmoke;
  font-size: 25px;
  font-weight: 600;
  text-transform: capitalize;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ImageHold = styled.div`
  width: 110px;
  height: 105px;
  border: 2px solid whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  backdrop-filter: blur(9px);
  border-radius: 10px;
`;
const Hold = styled.div`
  width: 230px;
  height: 500px;
  border: 5px solid whitesmoke;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  padding: 15px;
  background-color: #6b69694b;
`;
const Main = styled.div`
  width: 1000px;
  height: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 40px;
`;
const Cap = styled.div`
  width: 60px;
  padding: 20px;
`;
const Top = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${"https://img.freepik.com/premium-vector/empty-blackboard-with-various-wild-animals-forest_1639-24444.jpg"});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  /* background-repeat: no-repeat; */
`;

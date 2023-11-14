import { AnimalMatch } from "./AnimalMatch";
import { ColorMatch } from "./ColorMatching";
import { Home } from "./Home";
import { NumberMatch } from "./NumberMatch";

export const HomeScreen = () => {
  return (
    <div>
      <Home />
      <AnimalMatch />
      <ColorMatch />
      <NumberMatch />
    </div>
  );
};

import { useState } from "react";
import Roe from "../components/Roe";

function JiggyPage(props) {
  const [hungry, setHungry] = useState(true);
  function toggleHunger() {
    setHungry(!hungry);
  }
  return (
    <div>
      <h5>Jiggy Jiggy Goo. His favorite food is {props.food}</h5>
      {hungry ? <p> Jiggy is hungry</p> : <p>Jiggy is not hungry</p>}
      <Roe togglebutton={toggleHunger} food={props.food} />
    </div>
  );
}
export default JiggyPage;

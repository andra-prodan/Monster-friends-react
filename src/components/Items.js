import Monster from "./Monster.js";
import data from "../monsters.json";

function Items(props) {
  const filtredData = data.monsters.filter((item) => {
    if (props.input === "") {
      return item;
    } else {
      return item.title.toLowerCase().startsWith(props.input);
    }
  });
  return filtredData.map((monster) => (
    <Monster
      title={monster.title}
      description={monster.description}
      src={`${monster.url}`}
    />
  ));
}

export default Items;

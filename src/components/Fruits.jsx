import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

  const fruits = [
    { name: "Apple", price: 10, image: "🍎" },
    { name: "Mango", price: 7, image: "🥭" },
    { name: "Banana", price: 15, image: "🍌" },
    { name: "Pineapple", price: 21, image: "🍍" },
    { name: "Lemon", price: 25, image: "🍋" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            image={fruit.image}
          />
        ))}
      </ul>
    </div>
  );
}

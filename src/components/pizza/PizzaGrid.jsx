
import PizzaCard from "./PizzaCard";
import pizzas from "../../data/pizzas";

export default function PizzaGrid() {
  // Homepage par sirf 4 pizzas dikhayenge
  const featuredPizzas = pizzas.slice(0, 4);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {featuredPizzas.map((pizza, index) => (
        <div
          key={pizza.id ?? pizza.name}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-duration="800"
          data-aos-once="true"
        >
          <PizzaCard pizza={pizza} />
        </div>
      ))}
    </div>
  );
}

import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { ways } from "./data";

export default function App() {
  let content = "Press on button";

  console.log("App Component Render");

  function handleClick(type) {
    console.log("button clicked", type);
    content = type;
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Our educational format</h3>

          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>How we different</h3>

          <Button onClick={() => handleClick("way")}>Podhod</Button>
          <Button onClick={() => handleClick("easy")}>Dostupnost</Button>
          <Button onClick={() => handleClick("program")}>Consentration</Button>

          <p>{content}</p>
        </section>
      </main>
    </div>
  );
}

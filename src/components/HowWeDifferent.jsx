import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";

export default function HowWeDifferent() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h3>How we different</h3>

      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Podhod
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Dostupnost
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Consentration
      </Button>

      {!contentType && <p>Click on button</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}

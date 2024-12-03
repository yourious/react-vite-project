import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button
        isActive={active === "main"}
        onClick={() => onChange("main")}
        // isActive={contentType === "main"}
        // onClick={() => setContentType("main")}
      >
        Main
      </Button>
      <Button
        isActive={active === "feedback"}
        onClick={() => onChange("feedback")}
        // isActive={contentType === "contact"}
        // onClick={() => setContentType("contact")}
      >
        Contact us
      </Button>
      <Button
        isActive={active === "effect"}
        onClick={() => onChange("effect")}
        // isActive={contentType === "contact"}
        // onClick={() => setContentType("contact")}
      >
        Effect
      </Button>
    </section>
  );
}

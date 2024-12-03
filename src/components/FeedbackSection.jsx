import { useState } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const [name, setName] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h3>Input value: {name}</h3>
      <input type="text" className="control" onChange={handleNameChange} />
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });

  function handleNameChange(event) {
    const value = event.target.value;
    setForm((prev) => ({
      ...prev,
      name: value,
      hasError: value.trim().length === 0,
    }));
  }

  return (
    <section>
      <h3>Feedback page</h3>

      <form style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{ border: form.hasError ? "1px solid red" : null }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Tell your reason</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Have some error</option>
          <option value="help">Need help</option>
          <option value="suggest">I have suggestion</option>
        </select>

        {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Send
        </Button>
      </form>
      <StateVsRef />
    </section>
  );
}

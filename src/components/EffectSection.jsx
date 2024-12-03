import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  const [modal, setModal] = useState(false);
  function openModal() {
    setModal(true);
  }
  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Open info</Button>

      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ipsa
          rem hic velit facilis dolore cum assumenda quos nulla vitae rerum fuga
          laudantium officiis quaerat fugiat, eos omnis deleniti autem!
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
    </section>
  );
}

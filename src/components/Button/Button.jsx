import classes from "./Button.module.css";

export default function Button({ children, isActive, ...prop }) {
  // console.log(classes);
  return (
    <button
      {...prop}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      {children}
    </button>
  );
}

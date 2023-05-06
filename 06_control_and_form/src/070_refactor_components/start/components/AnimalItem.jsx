export const AnimalItem = ({ animal }) => {
  return (
    <li key={animal}>
      {animal}
      {animal === "Dog" && "★"}
    </li>
  )
}
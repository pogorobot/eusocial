export default function Meeple(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Hunger: {props.hunger} <button>Feed</button></p>
      <p>Thirst: {props.thirst} <button>Give Water</button></p>
    </div>
  )
}
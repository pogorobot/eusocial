import { useState } from "react";

export default function Flower() {
  const [pollinated, pollinate] = useState(false);

  let pollenStatus;
  if (pollinated) {
    pollenStatus = "You are covered in pollen.";
  } else {
    pollenStatus = "";
  }

  return (
    <div>
      <h2>This thing is a flower.</h2>
      <p>You may pollinate this flower, if you wish.</p>
      <p><button onClick={pollinate}>Pollinate</button></p>
      <h2>{pollenStatus}</h2>
    </div>
  )
}
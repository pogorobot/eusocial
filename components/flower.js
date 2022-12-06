import { useState } from "react";

export default function Flower() {
  const [pollinated, pollinate] = useState(false);

  return (
    <div>
      <h2>This thing is a flower.</h2>
      <p>You may pollinate this flower, if you wish.</p>
      <p><button onClick={pollinate}>Pollinate</button></p>
      {pollinated && <h2>You are covered in pollen.</h2>}
    </div>
  )
}
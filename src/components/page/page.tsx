
import './page.css';
import { Timer } from "../timer/timer";
import {Presets} from "../presets/presets";
import {useState} from "react";

export function Page() {

    const [time, setTime] = useState(10);

    return (
      <div className='centerPage'>
          <Timer propTime={time} />
          <Presets timeSet={(propTime) => setTime(propTime)} />
      </div>
    );
}

import './page.css';
import {Timer} from "../timer/timer";
import {useState} from "react";

export function Page() {

    const [back, setBack] = useState('green');

    return (
        <div className={['centerPage', back === 'red' ? 'red' : ''].join(' ')}>
            <Timer excess={(what: boolean) =>
                what ? setBack('red') : setBack('green')}
            />
        </div>
    );
}

import './timer.css';
import {useEffect, useRef, useState} from "react";
import {timeLabel} from "../../utils/formatter";

function isExcess(time: number, elapsed: number): boolean {
    return Math.trunc(time) - Math.trunc(elapsed) === 0;
}

export function Timer(props: { excess: (b: boolean) => void }) {

    const {excess} = props;

    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(10);

    const [elapsed, setElapsed] = useState(0);
    const elapsedRef = useRef(elapsed);
    elapsedRef.current = elapsed;

    function resetTime(value: number) {
        setElapsed(0);
        setTime(value);
        props.excess(false);
    }

    useEffect(() => {
        if (!running) {
            return;
        }

        const handler = setTimeout(() => {
            setElapsed(elapsedRef.current + 1);
            isExcess(time, elapsed) && excess(true);
        }, 1000);

        return () => clearTimeout(handler);
    }, [elapsed, running, time, excess]);

    const [min, sec] = timeLabel(time, elapsed);

    return (
        <div className='center'>
            <div className='time'>
                <span className='digitsMin'>{min}</span>
                <span className={running ? 'blink' : ''}>:</span>
                <span className='digitsSec'>{sec}</span>
            </div>

            <div className={['presets', running ? 'opacityZero' : ''].join(' ')} hidden={running}>
                <div className='presetItem' onClick={() => resetTime(30)}>30 s</div>
                <div className='presetItem' onClick={() => resetTime(60)}>1 m</div>
                <div className='presetItem' onClick={() => resetTime(300)}>5 m</div>
                <div className='presetItem' onClick={() => resetTime(600)}>10 m</div>
            </div>

            <div className='controls'>
                {
                    running
                        ? <button onClick={() => setRunning(false)}>stop</button>
                        : <button onClick={() => setRunning(true)}>start</button>
                }
            </div>
        </div>
    );
}

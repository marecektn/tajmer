import './timer.css';
import {useEffect, useRef, useState} from "react";

function formatZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
}

function formatTime(time: number): string[] {
    if (time > 59) {
        const min = Math.trunc(time / 60);
        const sec = Math.trunc(time % 60);
        return [formatZero(min), formatZero(sec)];
    } else {
        return ['00', formatZero(time)];
    }
}

function timeLabel(time: number, elapsed: number): string[] {
    return formatTime(Math.abs(time - elapsed));
}

export function Timer(props: { propTime: number }) {

    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(props.propTime);
    const [elapsed, setElapsed] = useState(0);
    const elapsedRef = useRef(elapsed);
    elapsedRef.current = elapsed;

    function onStart() {
        setRunning(true);
    }

    function onStop() {
        setRunning(false);
    }

    useEffect(() => {
        setTime(props.propTime);
        setElapsed(0);
    }, [props.propTime]);

    useEffect(() => {
        if (!running) {
            return;
        }

        const handler = setTimeout(() => {
            setElapsed(elapsedRef.current + 1);
        }, 1000);

        return () => clearTimeout(handler);
    }, [elapsed, running]);

    const [min, sec] = timeLabel(time, elapsed);

    return (
        <div className='center'>
            <div className='time'>
                <span className='digits'>{min}</span>
                <span>:</span>
                <span className='digits'>{sec}</span>
            </div>
            <div className='controls'>
                {
                    running
                        ? <button onClick={() => onStop()}>stop</button>
                        : <button onClick={() => onStart()}>start</button>
                }
            </div>
        </div>
    );
}

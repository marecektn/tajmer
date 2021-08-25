
export function Presets(props: {timeSet: (num: number) => void}) {
    return (<div>
        <div onClick={() => props.timeSet(30)}>30 secs</div>
        <div onClick={() => props.timeSet(60)}>1 min</div>
        <div onClick={() => props.timeSet(300)}>5 min</div>
        <div onClick={() => props.timeSet(600)}>10 min</div>
    </div>);
}

import './presets.css'

export function Presets(props: {timeSet: (num: number) => void}) {
    return (<div>
        <div onClick={() => props.timeSet(30)}>30 s</div>
        <div onClick={() => props.timeSet(60)}>1 m</div>
        <div onClick={() => props.timeSet(300)}>5 m</div>
        <div onClick={() => props.timeSet(600)}>10 m</div>
    </div>);
}

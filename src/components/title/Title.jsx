import './title.css'

export default function Title({ number, text }) {
    return (
        <div className="titleContainer">
            <span className="titleNumber">{number}</span>
            <h2 className="titleText">{text}</h2>
        </div>
    )
}

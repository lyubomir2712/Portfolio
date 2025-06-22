import './Title.css'
export default function Title({title}) {
    return (
        <div className="title-container">
            <h4 className="title">{title}</h4>
        </div>
    )
}
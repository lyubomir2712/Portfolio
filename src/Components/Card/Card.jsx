import "./Card.css"
import CardIcon from "./CardIcon.jsx";

export default function Card({date, title, text}) {
    return (
        <div className="card">
            <svg className="card-svg" xmlns="http://www.w3.org/2000/svg" width="1170" height="461" viewBox="0 0 1170 461" fill="none">
                <g opacity="0.22" filter="url(#filter0_f_94_12716)">
                    <circle cx="585" cy="473" r="329" fill="#5B21B6"/>
                </g>
                <defs>
                    <filter id="filter0_f_94_12716" x="-18" y="-130" width="1206" height="1206" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="137" result="effect1_foregroundBlur_94_12716"/>
                    </filter>
                </defs>
            </svg>


            <div className="card-inner">
                <div className="card-dates card-cell1">{date}</div>

                <div className="card-icon card-cell2"><CardIcon/></div>
                <div className="card-title card-cell3">{title}</div>
                <div className="card-text card-cell4">{text}</div>
            </div>
        </div>
    )
}
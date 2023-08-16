import CardStyle from "./CardStyle.css"

function Card(props){
    
    return(
        <div>
            {props.name}
            {props.asignature}
        </div>
    )
    
}
export default Card;
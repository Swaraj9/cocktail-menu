import './Styles/Item.css';


const Item = ({drinkObj}) => {
    return(
        <a className = "Item" href = "#ItemPage" target = "_blank">
            <div id = "title">
                <h2>{drinkObj.strDrink}</h2>
                <h3>{drinkObj.strCategory}</h3>
            </div>
            <img src = {drinkObj.strDrinkThumb} alt = {drinkObj.strDrink} id = "thumbnail"/>
        </a>      
    );
}

export default Item;
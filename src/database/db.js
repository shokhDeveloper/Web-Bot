import Burger from "../assets/images/burger_cheese.jpeg";
import chicken_togora from "../assets/images/chicken_togora.jpeg"
import chicken_wings from "../assets/images/chicken_wings.jpeg"
import Cola from "../assets/images/cola.jpeg"
import Fanta from "../assets/images/fanta.jpeg"
import spinner from "../assets/images/spinner.jpeg"
export default () => {
    return [
        {
            id: 1,
            name: "Burger",
            price: 20000,
            image: Burger
        },
        {
            id: 2,
            name: "Chicken togora",
            price: 60000,
            image: chicken_togora
        },
        {
            id: 3,
            name: "Chicken wings",
            price: 65000,
            image: chicken_wings
        },
        {
            id: 4,
            name: "Cola",
            price: 19000,
            image: Cola
        },
        {
            id: 5,
            name: "Fanta",
            price: 60000,
            image: Fanta
        },
        {
            id: 6,
            name: "Huggy",
            price: 22000,
            image: spinner
        }
    ]
}
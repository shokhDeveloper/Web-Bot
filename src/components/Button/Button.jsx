export const Button = (props) => {
    const {title, shopItem} = props;
    return (
        <button onClick={shopItem}>{title}</button>
    )
}
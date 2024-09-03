
function Item ({ item }) {
    return (
        <div>
            <h4>{item.modelnumber}</h4>
            <p>{item.description}</p>
        </div>
    );

}

export default Item;
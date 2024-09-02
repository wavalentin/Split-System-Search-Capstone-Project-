import Item from "./Item"
function ItemList({items}) {
    
    items.map(currentItem => {
        return (
            <Item item={currentItem} />
        )
    })

}

export default ItemList;
// rendering lists key = index
import React from 'react';
import { ItemList } from '../components';

export function ItemListView ({items, type}) {
    return(
        <ItemList items={items} type={type}/>
    )
}
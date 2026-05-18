import { Item } from "./Item";
import './ItemList.module.css';

export function ItemList({ productos }) {
return (
    <div class="ItemList">
        {productos.map(prod => (
        <Item key={prod.id} {...prod} />
       ))}
    </div>
);
}
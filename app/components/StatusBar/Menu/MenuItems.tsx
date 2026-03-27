import { MenuItem } from "./Menu";

interface MenuProps {
  items?: MenuItem[];
}

export default function MenuItems(props: MenuProps) {
  const { items = [] } = props;
  if (items?.length === 0) return;
  return (
    <div className="absolute top-[calc(100%+.75rem)] bg-background rounded-sm shadow-lg shadow-background/50">
      <ul>
        {items.map((item) => (
          <li className="p-2 hover:bg-blue-950" key={item.id}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

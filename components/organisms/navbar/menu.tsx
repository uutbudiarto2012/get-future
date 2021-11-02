import Link from "next/link";
import cx from 'classnames'
interface MenuProps {
  title:string;
  href:string;
  active? : boolean;
}
export default function Menu(props:Partial<MenuProps>) {
  const {title,href="/",active} = props;
  const classMenu = cx({
    'link' : true,
    'active' : active
  })
  return (
    <li className="menu">
      <Link href={href}>
        <a className={classMenu}>{title}</a>
      </Link>
    </li>
  );
}

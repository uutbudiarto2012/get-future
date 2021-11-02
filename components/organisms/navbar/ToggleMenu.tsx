interface ToogleMenuProps {
  onClick? : () => void,
}
export default function ToggleMenu(props:Partial<ToogleMenuProps>) {
  const {onClick} = props;
  return (
    <div className="d-md-none _menu_toggle" onClick={onClick} >
      <div className="_bar _bar_1"></div>
      <div className="_bar _bar_2"></div>
      <div className="_bar _bar_3"></div>
    </div>
  );
}

import "./SidePanel.scss";
import { ImCross } from "react-icons/im";
import Tienda from "../Store/Store";
interface SidePanelProps {
  viewPanel: boolean;
  setViewPanel: (value: boolean) => void;
}
function SidePanel({ viewPanel, setViewPanel }: SidePanelProps) {
  const handleClick = (): void => {
    setViewPanel(!viewPanel);
  };

  return (
    <div className={`SidePanelView ${viewPanel ? "expanded" : "collapsed"}`}>
      <div className="MenuButton" onClick={handleClick}>
        <button className="BurgerButton" type="button">
          <ImCross />
        </button>
      </div>
      <Tienda />
    </div>
  );
}

export default SidePanel;

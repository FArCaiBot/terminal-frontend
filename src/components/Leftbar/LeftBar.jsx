import PropTypes from "prop-types";
import { Sidebar } from "primereact/sidebar";

export const LeftBar = ({ navConfig, open, onClose }) => {
  return (
    <Sidebar onHide={() => onClose()} visible={open}>
      <h2>Sidebar</h2>
      <ul className="list-none gap-4 flex flex-column">
        {navConfig.map((navItem) => (
          <li key={navItem.id}>{navItem.label}</li>
        ))}
      </ul>
    </Sidebar>
  );
};

LeftBar.propTypes = {
  navConfig: PropTypes.array,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

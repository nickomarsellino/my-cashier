import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { disableHeaderList } from "./data/dataMainTemplate";

interface DefaultProps {
  children?: JSX.Element;
}

const MainTemplate = ({ children }: DefaultProps) => {
  const location = useLocation();

  const [disableHeader, setDisableHeader] = useState<boolean>(false);

  useEffect(() => {
    if (disableHeaderList.includes(location.pathname)) {
      setDisableHeader(true);
    } else {
      setDisableHeader(false);
    }
  }, [location.pathname]);

  return (
    <div>
      {!disableHeader && <p>HEADER</p>}
      <div>{children}</div>
      <p>FOOTER</p>
    </div>
  );
};

export default MainTemplate;

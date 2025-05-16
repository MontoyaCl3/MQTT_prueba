import { useState } from "react";

function useCollapse() {
  const [collapse, setCollapse] = useState(false);

  const changeCollapse = () => setCollapse(!collapse);

  return [collapse, changeCollapse];
}

export default useCollapse;
import * as components from "@/components";
import { useEffect, useState } from "react";
import * as styles from "./styles";

export default () => {
  const [getverticalMode, setVerticalMode] = useState<boolean>(false);
  const [getUserNameValue, setUserNameValue] = useState<string>();
  const [getPasswordValue, setPasswordValue] = useState<string>();

  useEffect(() => {
    try {
      setVerticalMode(window.innerHeight > window.innerWidth)
    }
    catch { }
  });

  return <styles.view>
  </styles.view>;
};
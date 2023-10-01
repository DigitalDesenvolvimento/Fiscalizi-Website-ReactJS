import lightMode from "./lightMode";
import darkMode from "./darkMode";
import { modeContext } from "@/utils";

export default (modeContext.get() == modeContext.Modes.darkMode) ? darkMode : lightMode;
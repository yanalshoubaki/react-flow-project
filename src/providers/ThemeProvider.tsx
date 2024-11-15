import { NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default ThemeProvider;

import { Global, css, useTheme } from "@emotion/react";
import { Theme } from "../interfaces";

const GlobalStyles: React.FC = () => {
  const theme = useTheme() as Theme;

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: ${theme.fonts.main};
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
        }
      `}
    />
  );
};

export default GlobalStyles;

import { css, Global, useTheme } from "@emotion/react";

import { styles } from "./styles";

const GlobalStyles = () => {
  return <Global styles={styles} />;
};

export default GlobalStyles;

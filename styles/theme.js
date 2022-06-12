import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: '#f9f9f8',
        },
      }),
    },
  });

export default theme;
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';

type EmsMuiProviderProps = {
  children: React.ReactNode;
};

export const EmsMuiProvider = (props: EmsMuiProviderProps) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

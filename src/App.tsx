import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { EmsMuiProvider } from './lib/EmsMuiProvider';

const App = () => {
  return (
    <EmsMuiProvider>
      <RouterProvider router={router} />
    </EmsMuiProvider>
  );
};

export default App;

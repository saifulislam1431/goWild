import 'react-native-gesture-handler';
import Navigation from './Navigation/Navigation';
import { View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>

  );
}

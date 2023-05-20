import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost', // Встановіть 'localhost' як хост
    },
  },
});

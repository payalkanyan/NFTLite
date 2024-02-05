import CustomCursor from '@/components/CustomCursor/CustomCursor';
import Layout from '@/components/Layout/Layout';
import CursorManager from '@/store/CursorManager';
import StateContextProvider from '@/store/StateContext';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar/Navbar';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <CursorManager>
      <StateContextProvider>
        <CustomCursor />
        <LiteflowProvider apiKey="ad3d9e5d-c0d8-469a-9d42-3b283e11d7bc">
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </LiteflowProvider>
      </StateContextProvider>
    </CursorManager>
  );
}

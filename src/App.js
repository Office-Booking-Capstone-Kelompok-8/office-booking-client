import { Helmet } from 'react-helmet';
import SetupRoute from './routes';

function App() {
  return (
    <main
      style={{
        overflowX: 'hidden',
      }}
    >
      <Helmet>
        <title>Office Zone</title>
      </Helmet>
      <SetupRoute />
    </main>
  );
}

export default App;

import Header from './pages/admin/sidebar/Header';
import Sidebar from './pages/admin/sidebar/Sidebar';
import SetupRoute from './routes';

function App() {
  return (
    <main
      style={{
        overflowX: 'hidden',
        display: 'flex',
      }}
    >
      <Sidebar />
      <div
        className="flex-grow-1 h-full"
        style={{ overflow: 'auto', position: 'relative' }}
      >
        <Header />
        <SetupRoute />
      </div>
    </main>
  );
}

export default App;

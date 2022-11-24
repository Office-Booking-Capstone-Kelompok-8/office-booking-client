import Sidebar from './components/admin/sidebar/Sidebar';
import Header from './pages/admin/sidebar/Header';
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
        <div className="p-3">
          <SetupRoute />
        </div>
      </div>
    </main>
  );
}

export default App;

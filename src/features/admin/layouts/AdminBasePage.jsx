
import Sidebar from '@/features/admin/components/layout/Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
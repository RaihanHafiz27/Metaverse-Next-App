const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="min-h-screen overflow-x-hidden">{children}</main>;
};

export default MainLayout;
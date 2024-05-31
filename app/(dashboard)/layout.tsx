import Header from "@/components/Header";

interface DashBoardLayoutProps {
  children: React.ReactNode;
}

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <>
      <Header />
      <main className=" px-3 lg:px-14">{children}</main>
    </>
  );
};

export default DashBoardLayout;

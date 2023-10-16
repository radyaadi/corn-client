import Content from "./layouts/Content";
import SideBar from "./layouts/SideBar";
import Header from "./layouts/TopBar";

const App = () => {
  return (
    <>
      <header className="fixed z-[100] h-14 w-full bg-[#f65555] text-white">
        <Header></Header>
      </header>
      <main className="mx-auto flex w-full max-w-[1440px] flex-row">
        <SideBar></SideBar>
        <Content></Content>
      </main>
    </>
  );
};

export default App;

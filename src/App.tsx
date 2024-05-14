import DummyCard from "./components/DummyCard";

const App = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="h-full w-screen bg-neutral-950 text-neutral-50 flex flex-col items-center gap-2 py-4">
      <div className="default-card">
        <h1 className="text-xl font-bold">Scroll To Top OR Bottom</h1>
        <button className="button" onClick={handleScrollToBottom}>
          Scroll to Bottom
        </button>
      </div>
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <DummyCard />
      <div className="default-card">
        <button className="button" onClick={() => handleScrollToTop()}>
          Scroll to Top
        </button>
      </div>
    </main>
  );
};

export default App;


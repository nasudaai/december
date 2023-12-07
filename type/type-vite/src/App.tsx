import './App.css'

function App() {
  return (
    <>
      <div>
        <header className="App-header">
          <LikeButton />
        </header>
      </div>
    </>
  )
}

function LikeButton() {
  const count: number = 999;
  return <span className="likeButton">♥ iine! {count}</span>;
}

export default App

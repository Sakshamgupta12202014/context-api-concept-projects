import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)  // way to access environment variables in Vite
  return (
    <>
      <h1>Appwrite blog website</h1>
    </>
  )
}

export default App

import Header from "./components/Header"
import Footer from "./components/Footer"
import WarehouseDrawing from "./components/WarehouseDrawing"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#d6e2e7]">
      <Header />

      <main className="flex-grow flex justify-center items-center w-full">
        <WarehouseDrawing width="600px" height="400px" />
      </main>
      
      <Footer />
    </div>
  )
}
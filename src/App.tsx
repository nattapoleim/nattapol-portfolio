// Components
import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/navbar/Navbar'

function App() {
   return (
      <main>
         <Navbar />
         <Hero />
         <About />
         <div className="h-[2000px]"></div>
      </main>
   )
}

export default App

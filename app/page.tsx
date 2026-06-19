import Sidebar from '@/components/layout/Sidebar'
import MobileNav from '@/components/layout/MobileNav'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="mx-auto max-w-[1280px] lg:flex">
      <Sidebar />

      <main id="main-content" className="flex-1 px-6 lg:ml-[320px] lg:px-12 lg:max-w-[760px]">
        <MobileNav />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Footer />
      </main>
    </div>
  )
}

import LandingPage from "../components/LandingPage"
import Header from "../components/Header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <LandingPage />
      </main>
    </>
  )
}

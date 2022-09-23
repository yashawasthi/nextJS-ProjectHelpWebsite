import Head from 'next/head'
import BrowseMore from '../components/BrowseMore/BrowseMore'
import FindProjectsLists from '../components/FindProjectsLists/FindProjectsLists'
import Footer from '../components/Footer/Footer'
import Landing from '../components/Landing/Landing'
import LandingSection2 from '../components/LandingSection2/LandingSection2'
import Navbar from '../components/Navbar/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Codersarts Project</title>
        <meta 
        name="description" 
        content="Codersarts is a 
        trusted website for Programming Assignment Help, 
        Project Help, and Mentorship. Our dedicated team of programming experts will 
        help and guide you throughout your software development journey" />
        <link rel="icon" href="/codersartsLogo.ico" />
      </Head>

      <main>
        <Navbar />
        <Landing />
        <LandingSection2 />
        <FindProjectsLists />
        <BrowseMore />
        <Footer />
      </main>
    </div>
  )
}

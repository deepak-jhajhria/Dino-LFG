import AboutSec from "../components/AboutSec"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
import { Header } from "../components/Header"
import Roadmap from "../components/Roadmap"
import Tokenomics from "../components/Tokenomics"
import Utility from "../components/Utility"

export const Index = () => {
    return (
        <div>
            <Header />
            <AboutSec />
            <Tokenomics />
            <Utility />
            <Roadmap />
            <Faq />
            <Footer />
        </div>
    )
}

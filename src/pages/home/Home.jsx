import Header from '../../components/header/Header'
import './home.css'

export default function Home(){
    return (
        <>  
            <Header />
            <div className="containerHome">
                
                <div className="homeContent">
                    <div className="homeText">
                        <h5>SO, YOU WANT TO TRAVEL TO</h5>
                        <h1>SPACE</h1>
                        <p>
                            Let’s face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <div className="homeExplore">
                        <div className="exploreButton">EXPLORE</div>
                    </div>
                </div>
            </div>
        </>
    )
}

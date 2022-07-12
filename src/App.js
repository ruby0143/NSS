import Nav from "./components/Nav/Nav";
import HomeNav from "./components/HomeNav/HomeNav";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/About/About";
import Awards from "./components/Awards/Awards";
import Team from "./components/Team/Team";
import Camp from "./components/Camp/Camp";
import BlooDonors from "./components/BlooDonors/BlooDonors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Donors from "./components/Donors/Donors";
import Contact from "./components/Contact/Contact";
import Coord from "./components/coordinators/Coord";
import Events from "./components/events/Events";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Carousel />
        <HomeNav />
        <Switch>
          <Route path="/team">
            <Team />
          </Route>

          <Route path="/2021">
            <Team />
            <Coord
              batch="2021"
              t1img="https://www.w3schools.com/css/paris.jpg"
              t1title="Card title"
            />
          </Route>

          <Route path="/camp">
            <Camp />
          </Route>

          <Route path="/bloodDonors">
            <BlooDonors />
          </Route>

          {/* <Route path="/o">
            <BlooDonors />
            <Donors
              type="O+ve"
              src="https://cmritonline.ac.in/wp-content/uploads/2021/09/Screenshot-17-1024x501-1.png"
            />
          </Route> */}

          <Route path="/awards">
            <Awards />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/cevent">
            <Events
              text={
                <div className="row">
                  <a href="#" className="a">• NSS DAY – 24.09.2021</a>
                  <a href="#" className="a">• BATHUKAMMA SAMBARALU – 09.10.2021</a>
                  <a href="#" className="a">• CLEAN INDIA CAMPAIGN – 30.10.2021</a>
                  <a href="#" className="a">• DIWALI AWARENESS – 03.11.2021</a>
                  <a href="#" className="a">• SWATCHA BHARAT – 24.12.2021</a>
                  <a href="#" className="a">• COVID VACCINATION DRIVE – 28.12.2021</a>
                  <a href="#" className="a">• SRISHTI 2022 – 28.02.2022</a>
                  <a href="#" className="a">• NYP – 10.03.2022</a>
                  <h4 className="left">2019-2020:</h4>
                  <a href="#" className="a">•	CLAY GANESH IMMERSION – 07.09.2019</a>
                  <a href="#" className="a">•	NSS GOLDEN JUBILEE – 29.09.2019</a>
                  <a href="#" className="a">•	KASHMIR TELANGANA YOUTH SUMMIT – 14.02.2022</a>
                </div>
              }
              category = "College Events"
            />
          </Route>

          <Route path="/sevent">
            <Events
              text={
                <div className="row">
                  <a href="#" className="a">•	ABHISTI SEVE PURASKAR - 03.10.2021</a>
                  <a href="#" className="a">•	6TH PRAVASI TELANGANA DEVAS - 12.12.2021</a>
                  <h4 className="left">2019-2020:</h4>
                  <a href="#" className="a">•	WORLD AIDS DAY – 01.12.2019</a>
                  <a href="#" className="a">•	HEARTFULNESS – 07.02.2020</a>
                  <a href="#" className="a">•	PRAVEGAH 2020 – 27.02.2020</a>
                  <a href="#" className="a">•	NATIONAL VOTERS DAY -25.01.2020</a>
                </div>
              }
              category = "State Events"
            />
          </Route>

          <Route path="/uevent">
            <Events
              text={
                <div className="row">
                  <a href="#" className="a">•	PRE- RD SELECTIONS – 13.11.2021</a>
                  <a href="#" className="a">•	AZADI-KA-AMRUTH-MAHOTSAV-02.10.2021</a>
                  <a href="#" className="a">•	PRE-RD CAMP - 20.11.22 – 29.11.2022</a>
                  <h4 className="left">2019-2020:</h4>
                  <a href="#" className="a">•	100TH GANDHI JAYANTHI – 02.10.2019</a>
                  <a href="#" className="a">•	KILL CANCER BY ISKCON – 19.12.2019</a>
                  <a href="#" className="a">•	ISKCON 5K RUN – 04.02.2020</a>
                </div>
              }
              category = "Universtity Events"
            />
          </Route>

          <Route path="/nevent">
            <Events
              text={
                <div className="row">
                  <a href="#" className="a">•	RD-PARADE CAMP 2021-31.12.2020 – 28.01.2021</a>
                  <a href="#" className="a">•	NIC 2021 HARYNA – 19.112021-25.11.2021</a>
                  <h4 className="left">2019-2020:</h4>
                  <a href="#" className="a">•	PRE-RD PARADE CAMP – 05.11.2019</a>
                  <a href="#" className="a">•	NIC EAST GODAVARI – 26.02.2020</a>
                  <a href="#" className="a">•	NIC JAIPUR – 27.02.2020</a>
                </div>
              }
              category = "National Events"
            />
          </Route>

          <Route path="/">
            <About />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

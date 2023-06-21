import {Link} from "react-router-dom";
import {Journals} from "react-bootstrap-icons";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Slider from "../components/Slider";


import bannersData from "../assents/data/banners.json";

const Home = ({user, setActive}) => {
	return <>
		<Layout mb={1} gap="none">
			<div className="info bannerUpp">
				<Banner {...bannersData[0]}/>
				<div className="info-link">
					{user && <Link to="/catalog">
						<Journals style={{marginRight: "10px"}}/>
						Каталог
						</Link>}
					
					{!user && <>
					<span className="info-button" onClick={() => setActive(true)}>Авторизуйтесь</span>, чтобы получить доступ к сайту</>}
				</div>
			</div>
		</Layout>
	<Layout mb={1} gap="small">
		<div className="pic" />
		
	</Layout>
	<Layout mb={1} gap="small">
		<Slider desktop={3} mobile={2} />
	</Layout>
	
	<Layout mb={1} dt={2} gap="small">
			<div className="half1"/>
			<div className="half2"/>	
	</Layout>

	<Layout mb={1} gap="small">
		<div className="pic" />
		
	</Layout>

</>
}

export default Home;
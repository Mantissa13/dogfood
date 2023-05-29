import {Link} from "react-router-dom";
import Logo from "./Logo"; 
import {
	BalloonHeartFill, 
	Basket2Fill, 
	PersonCircle, 
	BoxArrowInRight, 
//	BoxArrowLeft
} from "react-bootstrap-icons";

import Search from "../Search";

const Header = ({
			user, 
			searchArr, 
			setGoods, 
			setModalOpen
	}) => {
	const login = () => {
		setModalOpen(true)
	}
	// const logout = () => {
	// 	localStorage.removeItem("user12");
	// 	upd(null);
	// }
	return <header>
			<Logo/>
			<div className="search-block">
				<Search 
						data={searchArr} 
						setGoods={setGoods}
				/>
			</div>
			<nav className="header__menu">
				{user && <>
						<Link to="/favorites">
							<BalloonHeartFill title="Избранное"/>
						</Link>
						<Link to="/cart">
							<Basket2Fill title="Корзина"/>
						</Link>
						<Link to="/profile">
							<PersonCircle title="Личный кабинет"/>
						</Link>
				</>}
				<span>
					{!user && <BoxArrowInRight title="Войти" onClick={login}/>}
				</span>
			</nav>
	</header>
}

export default Header;


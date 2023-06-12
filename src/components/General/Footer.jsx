import {Link} from "react-router-dom";
import Logo from "./Logo"; 
const Links = [
	{name: "Каталог", src: "/catalog"},
	{name: "Избранное", src: "/"},
	{name: "Корзина", src: "/"},
	{name: "Тестовая страница", src: "/old"}
]

const Footer = () => <footer>
	<div className="footer__copy">
	<Logo/>
	<span>©{new Date().getFullYear()}</span>
	<a href="https://www.freepik.com/free-vector/cute-bone-pattern-yellow-background_2841795.htm#page=2&query=pattern%20puppy&position=1&from_view=search&track=ais">
			Image by starline</a> on Freepik
	</div>
	
	<ul className="footer__nav">
			{Links.map(el => <li key={el.name}>
				<Link to={el.src}>{el.name}</Link>
			</li>)}
	</ul>
</footer>

export default Footer;


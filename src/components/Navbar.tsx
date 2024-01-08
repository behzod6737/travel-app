import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants";
import Button from "./common/Button";
import { useState } from "react";



const Navbar = () => {
	const [hamburger, setHamburger] = useState(false);

	const hamburgerMenu = () => {
		setHamburger(!hamburger);
	};
	return (<>
		<nav className="flexBetween max-container padding-container relative z-30 py-5">
			<Link href="/">
				<Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
			</Link>

			<ul className="hidden h-full gap-12 lg:flex">
				{NAV_LINKS.map((link) => (
					<Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all  hover:font-bold">
						{link.label}
					</Link>
				))}
			</ul>

			<div className="lg:flexCenter hidden">
				<Button
					type="button"
					title="Login"
					icon="/user.svg"
					variant="btn_dark_green"
				/>
			</div>

			<Image
				src="menu.svg"
				alt="menu"
				width={32}
				height={32}
				className="inline-block cursor-pointer lg:hidden"
				onClick={() => hamburgerMenu()}
			/>
		</nav>

		<ul className={`${hamburger ? "left-0" : "left-[-100%]"} lg:hidden w-full  h-[100vh]  bg-white  fixed top-0  z-[300]  gap-12 transition-all duration-700 hover:duration-700`}>
			{NAV_LINKS.map((link) => (
				<Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer  lg:pb-1.5 pb-4 transition-all hover:font-bold relative top-[3rem]">
					{link.label}
				</Link>
			))}
			<Image 
			 onClick={() => hamburgerMenu()}
			 src={'burgerX.svg'} alt="cancel" width={41} height={41} className="absolute lg:static top-[2rem] right-[2rem] xs:right-[4rem] " />
		</ul>

	</>)
}

export default Navbar
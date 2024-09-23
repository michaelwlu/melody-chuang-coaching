import Link from "next/link";
import React from "react";

const NavLinkButton = ({ linkProps }) => {
	return (
		<Link
			href={linkProps.to}
			className={`${
				linkProps.highlight
					? "px-3 py-2 text-white bg-themeblue-900 hover:bg-themeblue-400 focus:bg-themeblue-400 "
					: "py-1 animate-underline"
			} mx-2 leading-5 rounded-md uppercase transform transition ease-in-out duration-200 hover:translate-y-px focus:translate-y-px tracking-widest inline-block focus:outline-none`}
		>
			{linkProps.name}
		</Link>
	);
};

export default NavLinkButton;

import Link from "next/link";
import React, { useContext } from "react";
import { NavContext } from "../../context/ResponsiveNav";

const CollapseLinkButton = ({ linkProps }) => {
	const { toggleNav } = useContext(NavContext);

	return (
		<Link
			href={linkProps.to}
			className="block w-full py-3 pr-6 tracking-wider text-right uppercase transition duration-200 ease-out border-t border-b border-white border-opacity-20 hover:text-themeblue-200 focus:outline-none focus:text-themeblue-200"
			onClick={toggleNav}
		>
			{linkProps.name}
		</Link>
	);
};

export default CollapseLinkButton;

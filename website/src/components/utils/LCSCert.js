import Image from "next/image";
import React from "react";

const LCSCert = () => {
	return (
		<div className="flex-shrink-0 mb-14 md:mt-2 md:mb-0 w-52 h-52">
			<a
				href="http://www.thelifecoachschool.com"
				target="_blank"
				rel="noopener"
			>
				<Image
					src="/images/lcs-seal.png"
					alt="The Life Coach School"
					className="transition duration-200 ease-in-out transform hover:translate-y-px focus:translate-y-px focus:outline-none"
					layout="responsive"
					width={640}
					height={640}
				/>
			</a>
		</div>
	);
};

export default LCSCert;

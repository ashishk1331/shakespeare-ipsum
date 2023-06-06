"use client";

import imageURL from "../images/skull.jpg";
import Image from "next/image";

export default function (props) {
	return (
		<>
			<header className="flex items-center gap-4 w-full">
				<Image
					width={128}
					height={128}
					src={imageURL}
					alt="Shakespeare Image"
					className="rounded-full w-24 h-24 aspect-square"
				/>
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Shakes
					<br />
					<p className="text-sunset">Pear</p>
				</h1>
			</header>
			<p className="bg-sunset/10 p-8 py-4 rounded-md italic text-xl">
				A lorem ipsum generator for the shakespeare lovers.
			</p>
		</>
	);
}

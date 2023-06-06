"use client";
import { sonnets } from "shakespeare-data";

export default function (props) {
	return (
		props.lines.length > 0 && <blockquote className="bg-sunset/10 p-8 rounded-md italic text-xl">
			{props.lines.map((line, ind) => (
				<p key={ind + ""}>{line}</p>
			))}
		</blockquote>
	);
}

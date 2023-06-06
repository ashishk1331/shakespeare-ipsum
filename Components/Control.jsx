"use client";
import { ChatCircleDots } from "@phosphor-icons/react";
import * as Slider from "@radix-ui/react-slider";
import { useState } from 'react';

export default function (props) {

	const [ count, setCount ] = useState(5)

	return (
		<form className="w-full flex flex-col items-center gap-4">
			<label htmlFor="" className="w-full">
				<div className="flex items-center gap-4 font-medium text-xl">
					<ChatCircleDots weight="fill" className="fill-sunset" size={24} />
					Sonnets
					<p className="ml-auto">{count}</p>
				</div>
			</label>

			<Slider.Root
				className="relative flex items-center select-none touch-none w-full h-5 mb-4"
				defaultValue={[count]}
				max={15}
				step={1}
				onValueChange={e => setCount(e[0])}
			>
				<Slider.Track className="bg-sunset/25 relative grow rounded-full h-3">
					<Slider.Range className="absolute bg-sunset h-full rounded-l-full" />
				</Slider.Track>
				<Slider.Thumb
					className="block w-5 h-5 bg-white rounded-full border-2 border-sunset"
					aria-label="Volume"
				/>
			</Slider.Root>

			<button type="submit" className="w-full p-4 bg-sunset rounded-md font-medium">
				Generate
			</button>
		</form>
	);
}

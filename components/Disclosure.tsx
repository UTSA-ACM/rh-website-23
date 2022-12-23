import type { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	className?: string;
}

const Disclosure: FunctionComponent = () => {
	return (
		<div className="bg-gray-900 h-[50vh] w-full grid grid-cols-2 py-[20px]">
			<div className="w-full h-[30vh] flex justify-end items-center border-r-white border-r-2 pr-[10px]">
				<Image
					src="/img/logos/rh_landing.svg"
					width={75}
					height={75}
					className="h-[75px] w-[75px]"
				></Image>
				<div className="ml-[5px]">
					<h1 className="text-4xl font-black font-sans text-white">RowdyHacks</h1>
					<h2 className="text-xl font-black font-permanent-marker italic text-white text-center">
						Into The Unknown
					</h2>
				</div>
			</div>
			<div className="w-full h-[30vh] flex flex-col justify-center items-start pl-[10px]">
				<Link href={'/contributions'}>
					<a className="text-white font-sans font-extrabold hover:underline hover:cursor-pointer">
						Contributions
					</a>
				</Link>
				<Link href={'/contributions'}>
					<a className="text-white font-sans font-extrabold hover:underline hover:cursor-pointer">
						Contact Us
					</a>
				</Link>
				<Link href={'/contributions'}>
					<a className="text-white font-sans font-extrabold hover:underline hover:cursor-pointer">
						Code of Conduct
					</a>
				</Link>
				<Link href={'/oss'}>
					<a className="text-white font-sans font-extrabold hover:underline hover:cursor-pointer">
						Open Source
					</a>
				</Link>
				<Link href={'/guide'}>
					<a className="text-white font-sans font-extrabold hover:underline hover:cursor-pointer">
						Survival Guide
					</a>
				</Link>
			</div>
			<div className="h-[20vh] col-span-2 pt-[20px]">
				<div className="text-white flex flex-col items-center font-sans font-bold">
					<p className="text-center text-sm">
						Made with &lt;/&gt; & ♥ @ RowdyHacks
						<br />© RowdyHacks & Association of Computing Machinery at UTSA{' '}
						{new Date().getFullYear()}. All Rights Reserved.
					</p>
					<p className="text-center mt-[20px] text-sm">
						HackPortal developed with &lt;3 by <p className="font-black inline">HackUTD</p> and{' '}
						<p className="font-black inline">ACM UTD Development</p>
					</p>
					<Link href={'/contributions'}>
						<a className="text-sm underline">Other Contributions</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Disclosure;
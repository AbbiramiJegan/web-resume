import Image from "next/image";
import { Inter } from "next/font/google";
import { db } from "@/utils/firebase";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Testimonial {
	id:string,
	testimonial : string
}

export default function Home() {
	return (
		<main className={`${inter.className} mx-auto max-w-2xl`}>
			<section className="border-b border-black py-4">
				<h1 className="text-[30px] p-4">Education</h1>
			</section>
			<section className="p-4 space-y-4">
				<div className="bg-green-100 p-4 rounded-xl border border-black">
					<h2 className="font-bold">Monash University Malaysia</h2>
					<p>Bachelor Degree in Computer Science in Data Science</p>
					<p>2022-2025</p>
					<p>I am a club member of GDSC MUM</p>
				</div>
				<div className="bg-green-100 p-4 rounded-xl border border-black">
					<h2 className="font-bold">Monash University Malaysia</h2>
					<p>2022-2025</p>
					<p>I am a club president of GDSC MUM</p>
				</div>
			</section>
			<section className="border-b border-black py-4">
				<h1 className="text-[30px] p-4">Experience</h1>
			</section>
			<section className="p-4 gap-4 grid grid-cols-2">
				<div className="bg-blue-300 p-4 rounded-xl border border-black">
					<h2 className="font-bold">Intern</h2>
					<h3>Petronas</h3>
					<p>July 2024 - September 2024</p>
					<p>I wrote a software to automate some things</p>
				</div>
				<div className="bg-blue-300 p-4 rounded-xl border border-black">
					<h2 className="font-bold">Intern</h2>
					<h3>Petronas</h3>
					<p>July 2024 - September 2024</p>
					<p>I wrote a software to automate some things</p>
				</div>
			</section>
			<section className="border-b border-black py-4">
				<h1 className="text-[30px] p-4">Testimonials</h1>
			</section>
			<section className="p-4 space-y-4">
				<div className="flex flex-row gap-4">
					<textarea placeholder="Type in your testimonials" className="w-full border border-black rounded-xl p-2"></textarea>
					<button className="bg-yellow-300 p-4 rounded-xl">Submit</button>
				</div>
				<div className="space-y-4">
					<div className="p-4 rounded-xl border border-black space-y-4">
						<p>This guy is a very nice person please work with him</p>
						<button className="bg-red-300 px-4 py-1 rounded-xl">Delete</button>
					</div>
					<div className="p-4 rounded-xl border border-black space-y-4">
						<p>This guy is a very nice person please work with him</p>
						<button className="bg-red-300 px-4 py-1 rounded-xl">Delete</button>
					</div>
				</div>
			</section>
		</main>
	);
}

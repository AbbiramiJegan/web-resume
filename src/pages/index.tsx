import Image from "next/image"; // Importing Image component from Next.js
import { Inter } from "next/font/google"; // Importing Inter font from Google Fonts
import { db } from "@/utils/firebase"; // Importing Firebase database utility
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks from React

// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define interface for Testimonial object
interface Testimonial {
	id:string,
	testimonial : string
}

// Define the Home component
export default function Home() {
	return (
		<main className={`${inter.className} mx-auto max-w-2xl`}> {/* Main container */}
			<section className="border-b border-black py-4"> {/* Education section */}
				<h1 className="text-[30px] p-4">Education</h1> {/* Education section title */}
			</section>
			<section className="p-4 space-y-4"> {/* Container for education entries */}
				{/* Education entry 1 */}
				<div className="bg-green-100 p-4 rounded-xl border border-black">
					<h2 className="font-bold">Monash University Malaysia</h2>
					<p>Bachelor Degree in Computer Science in Data Science</p>
					<p>2022-2025</p>
					<p>I am a club member of GDSC MUM</p>
				</div>
				{/* Education entry 2 */}
				<div className="bg-green-100 p-4 rounded-xl border border-black">
					<h2 className="font-bold">Monash University Malaysia</h2>
					<p>2022-2025</p>
					<p>I am a club president of GDSC MUM</p>
				</div>
			</section>
			<section className="border-b border-black py-4"> {/* Experience section */}
				<h1 className="text-[30px] p-4">Experience</h1> {/* Experience section title */}
			</section>
			<section className="p-4 gap-4 grid grid-cols-2"> {/* Container for experience entries */}
				{/* Experience entry 1 */}
				<div className="bg-blue-300 p-4 rounded-xl border border-black">
					<h2 className="font-bold">Intern</h2>
					<h3>Petronas</h3>
					<p>July 2024 - September 2024</p>
					<p>I wrote a software to automate some things</p>
				</div>
				{/* Experience entry 2 */}
				<div className="bg-blue-300 p-4 rounded-xl border border-black">
					<h2 className="font-bold">Intern</h2>
					<h3>Petronas</h3>
					<p>July 2024 - September 2024</p>
					<p>I wrote a software to automate some things</p>
				</div>
			</section>
			<section className="border-b border-black py-4"> {/* Testimonials section */}
				<h1 className="text-[30px] p-4">Testimonials</h1> {/* Testimonials section title */}
			</section>
			<section className="p-4 space-y-4"> {/* Container for testimonials */}
				{/* Testimonial input */}
				<div className="flex flex-row gap-4">
					<textarea placeholder="Type in your testimonials" className="w-full border border-black rounded-xl p-2"></textarea>
					<button className="bg-yellow-300 p-4 rounded-xl">Submit</button>
				</div>
				{/* Existing testimonials */}
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

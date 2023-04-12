import Link from 'next/link';

export default function Custom500() {
	return (
		<div className="flex flex-col mx-auto prose-xl mt-20 w-fit">
			<span className="text-center">🛑 There was an error on the server 🛑</span>
			<Link href="/" className="underline">
				Go Home
			</Link>
		</div>
	);
}

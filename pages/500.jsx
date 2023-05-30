import Link from 'next/link';
import styles from './500.module.css';

export default function Custom500() {
	return (
		<div className={`${styles.errorMessage} flex flex-col text-center`}>
			<span>🛑 There was an error on the server 🛑</span>
			<Link href="/">Go Home</Link>
		</div>
	);
}

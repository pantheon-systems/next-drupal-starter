import styles from './page-header.module.css';

export default function PageHeader({ title }) {
	return (
		<header className={styles.header}>
			<h1
				className={`${styles.headerTitle} font-extrabold my-auto mx-0 text-center`}
			>
				{title}
			</h1>
		</header>
	);
}

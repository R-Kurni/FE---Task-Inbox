import search from "../asset/search.png";

export default function HomePage() {
	return (
		<>
			<div className="homeContainer">
				<div>
					<img src={search} className="iconSearch"></img>
					<input className="inputSearch"></input>
				</div>
			</div>
		</>
	);
}

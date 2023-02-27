import search from "../asset/search.png";
import quicks from "../asset/stroke.png";
import inbox from "../asset/inbox.png";
import task from "../asset/task.png";
import inboxActive from "../asset/inbox-active.png";
import taskActive from "../asset/task-active.png";
import { useState } from "react";

export default function HomePage() {
	const [isQuicks, setIsQuicks] = useState(true);
	const [isTools, setIsTools] = useState(false);
	const [isInboxActive, setIsInboxActive] = useState(false);
	const [isTaskActive, setIsTaskActive] = useState(false);
	const handleQuicks = () => {
		setIsInboxActive(false);
		setIsTaskActive(false);
		setIsQuicks(true);
	};
	const handleTools = () => {
		setIsTools(true);
	};
	const handleInboxActive = () => {
		setIsTools(false);
		setIsQuicks(false);
		setIsTaskActive(false);
		setIsInboxActive(true);
	};
	const handleTaskActive = () => {
		setIsTools(false);
		setIsQuicks(false);
		setIsInboxActive(false);
		setIsTaskActive(true);
	};
	return (
		<>
			<div className="homeContainer">
				<div>
					<img src={search} className="iconSearch"></img>
					<input className="inputSearch"></input>
				</div>

				<div className="iconsContainer">
					{isQuicks ? (
						<div className="icons">
							<div className="quicks">
								<img
									src={quicks}
									className="stroke"
									onClick={handleTools}
								></img>
							</div>
							{isTools ? (
								<div className="tools">
									<div className="inboxArea">
										<div className="tools-text">Inbox</div>
										<div className="inbox">
											<img
												src={inbox}
												className="inboxIcon"
												onClick={handleInboxActive}
											></img>
										</div>
									</div>
									<div className="inboxArea">
										<div className="tools-text">Task</div>
										<div className="task">
											<img
												src={task}
												className="taskIcon"
												onClick={handleTaskActive}
											></img>
										</div>
									</div>
								</div>
							) : (
								<div></div>
							)}
						</div>
					) : (
						<div></div>
					)}

					{isInboxActive ? (
						<div>
							<div className="icons">
								<div className="inbox-active-shadow"></div>
								<div className="inbox-active">
									<img src={inboxActive} className="inboxIcon-active"></img>
								</div>
							</div>
							<div className="tools" style={{ marginRight: "10px" }}>
								<div className="inboxArea">
									<div className="task">
										<img
											src={task}
											className="taskIcon"
											onClick={handleTaskActive}
										></img>
									</div>
								</div>
							</div>

							<div
								tabIndex="-1"
								onBlur={handleQuicks}
								className="modalContainer"
							>
								<div
									style={{
										backgroundColor: "red",
										height: "100%",
										width: "100%",
									}}
								>
									<input></input>
								</div>
							</div>
						</div>
					) : (
						<div></div>
					)}

					{isTaskActive ? (
						<div>
							<div className="icons">
								<div className="task-active-shadow"></div>
								<div className="task-active">
									<img src={taskActive} className="taskIcon-active"></img>
								</div>
							</div>
							<div className="tools" style={{ marginRight: "10px" }}>
								<div className="inboxArea">
									<div className="inbox">
										<img
											src={inbox}
											className="inboxIcon"
											onClick={handleInboxActive}
										></img>
									</div>
								</div>
							</div>

							<div
								tabIndex="-1"
								onBlur={handleQuicks}
								className="modalContainer"
							>
								<div
									style={{
										backgroundColor: "blue",
										height: "100%",
										width: "100%",
									}}
								>
									<input></input>
								</div>
							</div>
						</div>
					) : (
						<div></div>
					)}
				</div>
			</div>
		</>
	);
}

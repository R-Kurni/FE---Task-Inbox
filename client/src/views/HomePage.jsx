import search from "../asset/search.png";
import quicks from "../asset/stroke.png";
import inbox from "../asset/inbox.png";
import task from "../asset/task.png";
import inboxActive from "../asset/inbox-active.png";
import taskActive from "../asset/task-active.png";
import TaskData from "../components/TaskData";
import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchTasks, createTask } from "../store/actions/actionCreator";
import { Col, Row, Dropdown, DropdownButton, Accordion } from "react-bootstrap";

export default function HomePage() {
	// const dispatch = useDispatch();
	// const { tasks } = useSelector((state) => {
	//     return state.tasks;
	// });
	const taskDatas = [
		{
			title: "Close off Case #012920-RODRIGUES, Amiguel",
			deadline: "2021-06-12",
			description:
				"Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
		},
		{
			title:
				"Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203",
			deadline: "2021-06-14",
			description:
				"All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
		},
		{
			title: "Set up appointment with Dr Blake",
			deadline: "2021-06-22",
			description: "No Description",
		},
	];
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
	// const handleAddTask = () => {
	//     dispatch(createTask());
	// };
	// useEffect(() => {
	//     dispatch(fetchtasks());
	// }, []);
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
									<div className="toolArea">
										<div className="tools-text">Inbox</div>
										<div className="tool">
											<img
												src={inbox}
												className="toolIcon"
												onClick={handleInboxActive}
											></img>
										</div>
									</div>
									<div className="toolArea">
										<div className="tools-text">Task</div>
										<div className="tool">
											<img
												src={task}
												className="toolIcon"
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
								<div
									className="inbox-active-shadow"
									onClick={handleQuicks}
								></div>
								<div className="inbox-active">
									<img
										src={inboxActive}
										className="inboxIcon-active"
										onClick={handleQuicks}
									></img>
								</div>
							</div>
							<div className="tools" style={{ marginRight: "10px" }}>
								<div className="toolArea">
									<div className="tool">
										<img
											src={task}
											className="toolIcon"
											onClick={handleTaskActive}
										></img>
									</div>
								</div>
							</div>

							<div
								// tabIndex="-1"
								// onBlur={handleQuicks}
								className="modalContainer"
							>
								<div>
									<h1 className="bg-white">inbox</h1>
								</div>
							</div>
						</div>
					) : (
						<div></div>
					)}

					{isTaskActive ? (
						<div>
							<div className="icons">
								<div
									className="task-active-shadow"
									onClick={handleQuicks}
								></div>
								<div className="task-active">
									<img
										src={taskActive}
										className="taskIcon-active"
										onClick={handleQuicks}
									></img>
								</div>
							</div>
							<div className="tools" style={{ marginRight: "10px" }}>
								<div className="toolArea">
									<div className="tool">
										<img
											src={inbox}
											className="toolIcon"
											onClick={handleInboxActive}
										></img>
									</div>
								</div>
							</div>

							<div
								// tabIndex="-1"
								// onBlur={handleQuicks}
								className="modalContainer"
							>
								<Row>
									<Col className="bg-white">
										<div className="bg-white">
											<DropdownButton
												drop={"down-centered"}
												variant="light"
												title={` My Tasks `}
												className="my-task"
											>
												<Dropdown.Item eventKey="1">
													Personal Errands
												</Dropdown.Item>
												<Dropdown.Divider />
												<Dropdown.Item eventKey="2">Urgent To-Do</Dropdown.Item>
											</DropdownButton>
										</div>
									</Col>
									<Col className="bg-white end">
										<div
											className="new-task"
											// onClick={handleAddTask}
										>
											New Task
										</div>
									</Col>
								</Row>
								<section className="bg-white task-data">
									<Row>
										<Col className="bg-white">
											<Accordion alwaysOpen flush>
												{taskDatas.map((taskData, idx) => {
													return (
														<TaskData taskData={taskData} key={idx} idx={idx} />
													);
												})}
											</Accordion>
										</Col>
									</Row>
								</section>
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

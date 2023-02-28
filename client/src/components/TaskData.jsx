import taskNotDone from "../asset/task-not-done.png";
import taskDone from "../asset/task-done.png";
import dateActive from "../asset/date-active.png";
import dateNotActive from "../asset/date-not-active.png";
import editActive from "../asset/edit-active.png";
import editNotActive from "../asset/edit-not-active.png";
import { useState } from "react";
import { Col, Row, Accordion, Form } from "react-bootstrap";

export default function TaskData({ taskData, idx }) {
	const [isTaskDone, setIsTaskDone] = useState(false);
	const [isTaskDate, setIsTaskDate] = useState(true);
	const [isTaskDescription, setIsTaskDescription] = useState(true);
	const handleTaskDone = () => {
		setIsTaskDone(true);
	};
	const handleTaskNotDone = () => {
		setIsTaskDone(false);
	};
	return (
		<>
			<Accordion.Item eventKey={idx}>
				<Accordion.Header>
					<Col lg={1} className="task-heading-start">
						{!isTaskDone ? (
							<img
								src={taskNotDone}
								className="taskIcon"
								onClick={handleTaskDone}
								style={{ zIndex: "1" }}
							></img>
						) : (
							<img
								src={taskDone}
								className="taskIcon"
								onClick={handleTaskNotDone}
								style={{ zIndex: "1" }}
							></img>
						)}
					</Col>
					<Col lg={7} className="task-heading-start">
						{!isTaskDone ? (
							<p className="bg-white task-title">{taskData.title}</p>
						) : (
							<del className="bg-white task-title-done">{taskData.title}</del>
						)}
					</Col>
					<Col lg={2} className="task-heading-center task-day-left">
						2 Days Left
					</Col>
					<Col lg={2} className="task-heading-center">
						{taskData.deadline}
					</Col>
				</Accordion.Header>
				<Accordion.Body className="bg-white">
					{isTaskDate ? (
						<Row>
							<Col lg={1} className="bg-white"></Col>
							<Col lg={1} className="bg-white">
								<div className="task-tool">
									<img src={dateActive} className="task-tool-date-icon"></img>
								</div>
							</Col>
							<Col lg={3} className="bg-white task-description">
								<Form.Control type="date" defaultValue={taskData.deadline} />
							</Col>
							<Col lg={7} className="bg-white"></Col>
						</Row>
					) : (
						<Row>
							<Col lg={1} className="bg-white"></Col>
							<Col lg={1} className="bg-white">
								<div className="task-tool">
									<img
										src={dateNotActive}
										className="task-tool-date-icon"
									></img>
								</div>
							</Col>
							<Col lg={3} className="bg-white task-description">
								<Form.Control type="date" defaultValue={taskData.deadline} />
							</Col>
							<Col lg={7} className="bg-white"></Col>
						</Row>
					)}

					{isTaskDescription ? (
						<Row>
							<Col lg={1} className="bg-white"></Col>
							<Col lg={1} className="bg-white">
								<div className="task-tool">
									<img src={editActive} className="task-tool-edit-icon"></img>
								</div>
							</Col>
							<Col lg={9} className="bg-white task-description">
								{taskData.description}
							</Col>
							<Col lg={1} className="bg-white"></Col>
						</Row>
					) : (
						<Row>
							<Col lg={1} className="bg-white"></Col>
							<Col lg={1} className="bg-white">
								<div className="task-tool">
									<img
										src={editNotActive}
										className="task-tool-edit-icon"
									></img>
								</div>
							</Col>
							<Col lg={9} className="bg-white task-description">
								No Description
							</Col>
							<Col lg={1} className="bg-white"></Col>
						</Row>
					)}
				</Accordion.Body>
			</Accordion.Item>
		</>
	);
}

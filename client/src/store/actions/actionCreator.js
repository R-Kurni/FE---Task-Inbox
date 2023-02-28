// import axios from "axios";

// export const fetchTasksSuccess = (data) => {
// 	return {
// 		type: "tasks/fetchSuccess",
// 		payload: data,
// 	};
// };

// export const fetchTasks = () => {
// 	return async (dispatch) => {
// 		try {
// 			const { data } = await axios({
// 				method: "GET",
// 				url: `http://localhost:3000/tasks`,
// 			});
// 			dispatch(fetchTasksSuccess(data));
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// };

// export const createTask = (formTask) => {
// 	return async (dispatch) => {
// 		try {
// 			const res = await fetch("http://localhost:3000/tasks", {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 					// access_token: localStorage.access_token,
// 				},
// 				body: JSON.stringify(formTask),
// 			});
// 			const data = await res.json();
// 			await dispatch(fetchtasks());
// 			return data;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// };

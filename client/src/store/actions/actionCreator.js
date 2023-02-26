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

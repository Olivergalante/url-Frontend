// import { useState, useEffect } from "react";

// export default UserList = () => {
// 	const [user, setUserList] = useState([]);

// 	useEffect(() => {
// 		const url = "http://127.0.0.1:8000/admin/backend_app/user/";
// 		const getUser = async () => {
// 			const data = await fetch(url).then((response) => response.json());
// 			setUserList(data);
// 		};
// 		getUser();
// 	}, []);

// 	return (
// 		<>
// 			<ul>
// 				{user?.map((user, index) => {
// 					return (
// 						<li key={index}>
// 							{user.name} - {user.url}
// 						</li>
// 					);
// 				})}
// 			</ul>
// 		</>
// 	);
// };

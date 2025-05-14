import axios from "axios";

export const fetchData = async (dataType = "all") => {
	let url = "https://restcountries.com/v3.1";
	let type = "";

	if (dataType === "all") {
		type = "/all";
	} else {
		type = `/name/${dataType}`;
	}
	url += type;

	const response = await axios.get(url);
	const resData = response.data;

	return resData;
};

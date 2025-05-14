import { useState } from "react";

export const useFetch = (fetchFn, countryName) => {
	const [isFetching, setIsFetching] = useState();
	const [error, setError] = useState();
	const [fetchedData, setFetchedData] = useState([]);
	let isIsrael = false;

	const fetchDataFn = async (target) => {
		setFetchedData([]);
		setIsFetching(true);
		setError(null);

		try {
			const resData = await fetchFn(target);
			if (
				resData.some((country) => country.name.common === "Israel")
			) {
				isIsrael = true;
				setError({ message: "Palestine will be free" });
				throw new Error();
			}

			setFetchedData([...resData]);
		} catch {
			setIsFetching(false);

			setError({
				message: !isIsrael
					? `Failed to fetch ${
							target === "all"
								? "all Countries"
								: `${
										countryName.length > 1 ? countryName : "['']"
								  } country`
					  }`
					: "You can't search for this country",
			});
		} finally {
			setIsFetching(false);
		}
	};
	return { isFetching, error, fetchedData, fetchDataFn };
};

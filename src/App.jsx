import { useFetch } from "./hooks/useFetch";
import { fetchData } from "../util/http";
import Country from "./components/Country";
import Loading from "./components/Loading";
import { useRef } from "react";
import Container from "./components/Container";
import Error from "./components/Error";

let country = "";
function App() {
	const inputRef = useRef();

	const handleSearch = (event) => {
		event.preventDefault();
		country = inputRef.current.value;
		fetchDataFn(country);
		country = inputRef.current.value = "";
	};

	const { error, fetchedData, isFetching, fetchDataFn } = useFetch(
		fetchData,
		country
	);
	console.log(fetchedData);
	return (
		<>
			<Container
				handleSearch={handleSearch}
				inputRef={inputRef}>
				{isFetching && <Loading />}
				{fetchedData &&
					fetchedData.map(
						(country) =>
							country && (
								<Country
									capital={country.capital}
									currency={
										country.currencies.EGP?.symbol ?? " empty"
									}
									flag={{
										alt: country.flags.alt,
										src: country.flags.png,
									}}
									name={country.name.common}
									population={country.population}
									timezone={country.timezones[0]}
									key={country.name.common}
								/>
							)
					)}

				{error && (
					<Error
						title="ERROR HAS ACCURED!"
						message={error.message}
					/>
				)}
			</Container>
		</>
	);
}

export default App;

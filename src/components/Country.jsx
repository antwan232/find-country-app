import Error from "./Error";

const Country = ({
	name,
	flag,
	capital,
	population,
	timezone,
	currency,
}) => {
	return (
		<div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
			<img
				className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
				src={flag.src}
				alt={flag.alt}
			/>
			<div className="flex flex-col justify-between p-4 leading-normal">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					country name: {name}
				</h5>
				<ul className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-col justify-between">
					<li>capital : {capital}</li>
					<li>population : {population}</li>
					<li>timezone : {timezone}</li>
					<li> currency :{currency}</li>
				</ul>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{flag.alt}
				</p>
			</div>
		</div>
	);
};

export default Country;

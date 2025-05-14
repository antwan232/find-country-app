const Error = ({ title, message }) => {
	return (
		<div className="block max-w-sm p-6 bg-red-300 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			{message}
		</div>
	);
};

export default Error;

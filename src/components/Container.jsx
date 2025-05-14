import Button from "./Button";
import Input from "./Input";

const Container = ({ handleSearch, inputRef, children }) => {
	return (
		<main className="p-20 bg-cyan-100 min-h-screen flex justify-start items-center flex-col gap-5">
			<form className="w-full mx-auto place-self-start">
				<label
					htmlFor="default-search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
					Search
				</label>
				<div className="relative">
					<Input inputRef={inputRef} />
					<Button handleClick={handleSearch} />
				</div>
			</form>

			{children}
		</main>
	);
};

export default Container;

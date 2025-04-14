import Link from "next/link"

const TopBar = () => {
	return (
		<div className="p-4 bg-gray-800 text-white flex justify-between items-center fixed top-0 left-0 right-0 z-50">
			<Link href={"/"}>
				<h1 className="font-bold">Logo</h1>
			</Link>
			<Link href={"/setting"}>Setting</Link>
		</div>
	)

}

export default TopBar
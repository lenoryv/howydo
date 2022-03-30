import { MdTipsAndUpdates } from "react-icons/md";

function Sidebar() {
    return (
        <aside className="md:h-full md:sticky md:top-16 md:col-start-1 md:w-64 md:row-start-2 md:col-end-2 w-screen row-star-2 row-end-3 z-10 bg-gray-50" aria-label="Sidebar">
            <div className="md:sticky md:top-14 md:px-2 md:py-4 overflow-y-auto p-6 rounded dark:bg-gray-800">
                <ul className="space-y-2">
                    <li>
                        <a href="/new" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3">Nuevos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap">Herramientas</span>
                            <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="flex-1 ml-3 whitespace-nowrap">Tips</span>
                            <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                        </a>
                    </li>
                </ul>
                <div id="dropdown-cta" className="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900" role="alert">
                    <div className="flex items-center mb-3">
                        <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-collapse-toggle="dropdown-cta" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
                        Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                    </p>
                    <a className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
                </div>
            </div>
        </aside>
    )
}
export default Sidebar;
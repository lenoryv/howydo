import React from "react";
import Link from "next/link";

function Card({ howydos }) {
    return (
        <React.Fragment>
            {howydos.map((howydo) => {
                return (
                    <div key={howydo.id}
                        className="p-6 mb-6 last:mb-0 w-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-sans font-semibold tracking-tight text-gray-900 dark:text-white">{howydo.properties.Name.title[0].plain_text}</h5>
                        </a>
                        <h3 className="font-mono text-sm text-gray-400">{howydo.properties.Date.date.start}</h3>
                        <p className="my-4 font-normal font-sans text-gray-700 dark:text-gray-400">{howydo.properties.Description.rich_text[0].plain_text}</p>
                        <Link href={'/howydo/' + howydo.properties.Page.relation[0].id}>
                            <div className="h-10 w-44 flex justify-between px-4 border rounded-full hover:bg-gray-300 cursor-pointer">
                                <span className="flex items-center font-light text-sm">Continuar leyendo</span>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </React.Fragment>
    )
}
export default Card;
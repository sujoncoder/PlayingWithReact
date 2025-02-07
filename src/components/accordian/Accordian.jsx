import MaxWidth from "../MaxWidth"
import AppTitle from "../AppTitle"
import faqData from "../../utils/AccordianData"
import { useState } from "react"


const Accordian = () => {
    const [selected, setSelected] = useState(null);



    // HANDLE ACCORDIAN SINGLE CLICK
    const handleSingleClick = (getId) => {
        setSelected(getId === selected ? null : getId)
    };

    return (
        <div>
            <AppTitle>Accordian</AppTitle>

            <MaxWidth className="w-[500px]">
                {faqData && faqData.length > 0 ? (
                    faqData.map((data) => (
                        <div
                            onClick={() => handleSingleClick(data.id)}
                            key={data.id}
                            className="bg-green-100 my-2 p-4 cursor-pointer">
                            <div className="flex justify-between items-center">
                                <h2 className="rounded text-xl text-slate-700 font-bold">{data?.question}</h2>

                                <span className="text-3xl">+</span>
                            </div>

                            <h3 className="my-3">
                                {
                                    selected === data.id ? (
                                        <p className="bg-white text-lg font-medium p-4 rounded">
                                            {data.answer}
                                        </p>
                                    ) : null
                                }
                            </h3>
                        </div>
                    ))
                ) : (
                    <h1 className="text-3xl font-bold text-center text-red-500">Data not Found !</h1>
                )}
            </MaxWidth>
        </div>
    )
}

export default Accordian
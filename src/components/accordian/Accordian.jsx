import { useState } from "react"
import MaxWidth from "../MaxWidth"
import AppTitle from "../AppTitle"
import faqData from "../../utils/AccordianData"
import { Power } from 'lucide-react';


const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);


    // HANDLE SINGLE ACCORDIAN CLICK
    const handleSingleClick = (getId) => {
        setSelected(getId === selected ? null : getId);
    };

    // HANDLE MULTIPLE SELECT CLICK
    const handleMultipleSelect = (getId) => {
        let copyMultiple = [...multiple];
        const findCurrentIndexId = copyMultiple.indexOf(getId)

        if (findCurrentIndexId === -1) copyMultiple.push(getId)
        else copyMultiple.splice(findCurrentIndexId, 1)
        setMultiple(copyMultiple)
    };

    console.log("selected", multiple)

    return (
        <div>
            <AppTitle>Accordian 2.0</AppTitle>

            <div className="flex justify-center items-center">
                <div
                    onClick={() => setEnableMultiSelect(!enableMultiSelect)}
                    className={`flex justify-center items-center mb-10 text-xl font-semibold space-x-3 border w-[230px] h-12 text-white  rounded cursor-pointer ${enableMultiSelect ? "bg-blue-500" : "bg-red-500"}`}>

                    <span>{enableMultiSelect ? "Disable Multi Select" : "Enable Multi Select"}</span>
                    <Power />
                </div>
            </div>

            <MaxWidth className="w-[500px]">
                {faqData && faqData.length > 0 ? (
                    faqData.map((data) => (
                        <div

                            onClick={
                                enableMultiSelect
                                    ? () => handleMultipleSelect(data.id)
                                    : () => handleSingleClick(data.id)
                            }
                            key={data.id}
                            className="bg-green-100 my-2 p-4 cursor-pointer">
                            <div className="flex justify-between items-center">
                                <h2 className="rounded text-xl text-slate-700 font-bold">{data?.question}</h2>

                                <span className="text-3xl">+</span>
                            </div>

                            <h3 className="my-3">

                                {selected === data.id || multiple.includes(data.id) ? (
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
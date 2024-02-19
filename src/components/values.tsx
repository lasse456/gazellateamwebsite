import Link from "next/link";
import { useState } from "react";


const valueData = [
    {heading: "Transparency", description: "We regularly dive deep into a wide range of industries and challenges, including."},
    {heading: "Transparency", description: "We regularly dive deep into a wide range of industries and challenges, including."},
    {heading: "Transparency", description: "We regularly dive deep into a wide range of industries and challenges, including."},
    {heading: "Transparency", description: "We regularly dive deep into a wide range of industries and challenges, including."},
    {heading: "Transparency", description: "We regularly dive deep into a wide range of industries and challenges, including."},
    {heading: "Transparency", description: "We regularly dive deep into a wide range of industries and challenges, including."},
];

export default function Values() {
    return (
        <section className="py-[100px] pt-[100px]">
            <div className="w-[90%] mx-auto mb-[100px] max-w-main">
                <div className="mb-[20px]">
                    <h1 className="text-[40px] font-[400] text-main">How we operate with partners</h1>
                    <p className="text-gray-600 text-[20px] font-[300]">We take pride in all of our craft</p>
                </div>
            </div>
            <div className="w-[90%] mx-auto grid grid-cols-3 gap-[70px] max-w-main">
                {valueData.map(v => <ValueCard key={v} Obj={v} />)}
            </div>
        </section>
    )
}


const ValueCard = (props: any) => {
  return (
    <div>
        <h1 className="font-[400] text-[28px] text-main mb-[20px]">{props.Obj.heading}</h1>
        <p className="font-[300] text-[18px] text-gray-600">{props.Obj.description}</p>
    </div>
  );
};
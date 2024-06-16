import {MouseEventHandler, ReactNode} from "react";
import clsx from "clsx";

interface SubmitButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

function SubmitButton({children, onClick}: SubmitButtonProps) {
    const buttonClassName = clsx("inline-flex flex-row transition-shadow duration-300 hover:duration-200 hover:transition-shadow justify-center items-center p-4 w-60 h-12 bg-gradient-to-r from-[#70C3FF] to-[#4B65FF] rounded-full hover:shadow-xl hover:from-[#5FB2FF] hover:to-[#3A54FF] active:from-[#4B65FF] active:to-[#2F44FF] active:shadow-inner")
    const contentClassName = clsx("w-15 font-inter font-bold text-lg leading-none text-center text-white")

    return (
        <button
            onClick={onClick}
            className={buttonClassName}
        >
            <span className={contentClassName}>
                {children}
            </span>
        </button>
    )
}

export default SubmitButton
import {ChangeEvent, forwardRef, LegacyRef, ReactNode} from "react";
import clsx from "clsx";

export interface InputProps {
    className?: string
    name: string
    placeholder: string
    type?: string
    isValid?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    rightInnerComponent?: ReactNode,
    ref: LegacyRef<HTMLInputElement>
}

export type InputPropsWithoutRef = Omit<InputProps, 'ref'>

const Input = forwardRef<HTMLInputElement, InputPropsWithoutRef>((
    {
        className,
        placeholder,
        type = 'text',
        isValid,
        rightInnerComponent = null,
        ...props
    }, ref: LegacyRef<HTMLInputElement>) => {

    const baseClassName = 'bg-white flex border border-transparent focus-within:border-slate-400 text-slate-700 text-base rounded-lg w-full py-2.5 px-4 leading-tight focus:outline-none'

    const wrapperClassName = clsx(baseClassName, className, {
        '!border-red-400 focus-within:!border-red-400 !text-red-400': isValid === false,
        '!border-green-500 focus-within:!border-green-500 !text-green-500': isValid === true
    })

    return <div className={wrapperClassName}>
        <input
            ref={ref}
            className={'flex-grow focus:outline-none'}
            type={type}
            placeholder={placeholder}
            {...props}
        />
        {rightInnerComponent}
    </div>
})

Input.displayName = 'Input'

export default Input
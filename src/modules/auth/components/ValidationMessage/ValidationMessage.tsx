import clsx from "clsx";
import {FieldError} from "react-hook-form";
import {ValidationResult} from "src/lib/validation/validation.ts";

interface ValidationMessageProps {
    validationMessage: FieldError | ValidationResult | string | undefined
}

function ValidationMessage({validationMessage}: ValidationMessageProps) {
    if (!validationMessage) {
        return null
    }

    let className = 'text-current text-xs text-red-400'
    const message = typeof validationMessage === 'string'
        ? validationMessage
        : validationMessage.message;


    if (typeof validationMessage === 'object' && 'valid' in validationMessage) {
        className = clsx('text-current text-xs', {
            'text-green-500': validationMessage.valid === true,
            'text-red-400': validationMessage.valid === false
        })
    }


    return <span className={className}>{message}</span>;
}

export default ValidationMessage
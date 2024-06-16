import {FieldError} from "react-hook-form";
import ValidationMessage from "../ValidationMessage";

function ValidationMessages({errors, className}: { errors: FieldError | undefined, className?: string }) {
    if (!errors) {
        return null
    }

    return (
        <div className={className}>
            {
                Array.isArray(errors)
                    ? errors.map((message, index) => <ValidationMessage
                        key={index}
                        validationMessage={message}
                    />)
                    : <ValidationMessage validationMessage={errors}/>
            }
        </div>
    )
}

export default ValidationMessages
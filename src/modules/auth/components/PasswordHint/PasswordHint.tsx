import ValidationMessage from "../ValidationMessage";
import {ValidationRule} from "src/lib/validation/validation.ts";

function PasswordHint({rules, className}: { rules: ValidationRule[] | undefined, className?: string }) {
    if (!rules) {
        return null
    }

    return <div className={className}>
        {
            rules.map((rule, index) => (
                <ValidationMessage
                    key={index}
                    validationMessage={{
                        valid: null,
                        message: rule.message
                    }}
                />
            ))
        }
    </div>
}

export default PasswordHint
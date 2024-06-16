import {ValidationRule} from "./validation.ts";
import {CASE_REGEXP, EMAIL_REGEXP, NO_SPACES_REGEXP, NUMBER_REGEXP} from "./validationConstants.ts";

export const passwordValidationRules: ValidationRule[] = [
    {
        test: (password: string) => password.length >= 8 && NO_SPACES_REGEXP.test(password),
        message: '8 characters or more (no spaces)',
    },
    {
        test: (password: string) => password.length <= 64,
        message: '64 characters or less',
    },
    {
        test: (password: string) => CASE_REGEXP.test(password),
        message: 'Uppercase and lowercase letters',
    },
    {
        test: (password: string) => NUMBER_REGEXP.test(password),
        message: 'At least one digit',
    },
]

export const emailValidationRules: ValidationRule[] = [
    {
        test: (email: string) => EMAIL_REGEXP.test(email),
        message: 'Invalid email',
    }
]
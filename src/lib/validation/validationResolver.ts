import {validate, ValidationResult, ValidationRule} from "./validation.ts";

export type ValidationResolverRules<T> = Record<keyof T, ValidationRule[]>

export type ValidationResolverResult<T> = {
    values: T
    errors: Record<keyof T, ValidationResult[] | undefined>
}

function validationResolver<T extends object>(data: T, rules: ValidationResolverRules<T>): ValidationResolverResult<T> {
    const validationResults = Object.entries(data).reduce(
        (acc, [key, value]) => {
            const fieldName = key as keyof T
            const validationResult = validate(value, rules[fieldName])
            const isInvalid = validationResult.some(result => !result.valid)

            if (!isInvalid) {
                return acc
            }

            acc[fieldName] = validationResult;

            return acc
        },
        {} as Record<keyof T, ValidationResult[] | undefined>
    )

    return {
        values: data,
        errors: validationResults
    }
}

export default validationResolver
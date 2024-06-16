export interface ValidationResult {
    valid: boolean | null
    message: string
}

export interface ValidationRule {
    test: (password: string) => boolean
    message: string
}

export const validate = (value: string, rules: ValidationRule[]): ValidationResult[] => {
    return rules.map((rule) => ({
        valid: rule.test(value),
        message: rule.message,
    }));
};
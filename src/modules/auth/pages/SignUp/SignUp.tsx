import {ChangeEvent, useMemo} from "react";
import {useForm} from 'react-hook-form'
import debounce from "debounce";
import Input from "src/components/Input";
import PasswordInput from "../../components/PasswordInput";
import ValidationMessages from "../../components/ValidationMessages";
import PasswordHint from "../../components/PasswordHint";
import SubmitButton from "../../components/SubmitButton";
import {emailValidationRules, passwordValidationRules} from "src/lib/validation/validationRules.ts";
import validationResolver, {ValidationResolverRules} from "src/lib/validation/validationResolver.ts";

interface SignUpFormData {
    email: string
    password: string
}

const formValidationRules: ValidationResolverRules<SignUpFormData> = {
    email: emailValidationRules,
    password: passwordValidationRules
}

function SignUp() {
    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitted, dirtyFields},
    } = useForm<SignUpFormData>({
        resolver: (data) => validationResolver<SignUpFormData>(data, formValidationRules),
        mode: "onChange"
    },)

    const onSubmit = (data: SignUpFormData) => {
        console.dir({
            email: data.email,
            password: data.password,
        })

        alert('Signed up successfully');
    }

    const {onChange: emailOnChange, ...emailRegisterProps} = register('email')
    const emailOnChangeDebounced = useMemo(() => {
        return debounce((e: ChangeEvent<HTMLInputElement>) => emailOnChange(e), 700)
    }, [emailOnChange])

    const isFieldValid = (fieldName: keyof SignUpFormData) => {
        return (isSubmitted || dirtyFields[fieldName]) && !errors[fieldName]
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className={'mt-20 text-3xl font-bold text-gray-700 text-center mb-10'}>Sign up</h1>
            <div className='text-gray-600 flex flex-col'>
                <Input
                    placeholder={'Email'}
                    isValid={isFieldValid('email')}
                    {...emailRegisterProps}
                    onChange={emailOnChangeDebounced}
                />
                <div className={'mt-1 mx-4'}>
                    <ValidationMessages errors={errors.email}/>
                </div>
                <PasswordInput
                    className={'mt-5'}
                    placeholder={'Create your password'}
                    isValid={isFieldValid('password')}
                    {...register('password')}
                />
                {
                    errors.password
                        ? <ValidationMessages
                            className={'mt-3 px-4 flex flex-col gap-0.5'}
                            errors={errors.password}
                        />
                        : <PasswordHint
                            className={'mt-3 px-4 flex flex-col gap-0.5'}
                            rules={passwordValidationRules}
                        />
                }
            </div>
            <div className='mt-10 text-center w-full'>
                <SubmitButton>
                    Sign up
                </SubmitButton>
            </div>
        </form>
    )
}

export default SignUp
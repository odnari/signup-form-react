import {forwardRef, useState} from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import Input, {InputProps, InputPropsWithoutRef} from "src/components/Input";

function PasswordToggleIcon({active}: { active: boolean }) {
    return active ? <FaEyeSlash/> : <FaEye/>
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props: InputPropsWithoutRef, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const onTogglePassword = () => {
        setShowPassword((prev) => !prev)
    }

    return (
        <div>
            <Input
                ref={ref}
                rightInnerComponent={(
                    <button
                        type='button'
                        onClick={onTogglePassword}
                    >
                        <PasswordToggleIcon active={showPassword}/>
                    </button>
                )}
                type={showPassword ? 'text' : 'password'}
                {...props}
            />
        </div>
    );
})

export default PasswordInput
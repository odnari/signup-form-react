import {forwardRef, useState} from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import Input, {InputProps, InputPropsWithoutRef} from "src/components/Input";


const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props: InputPropsWithoutRef, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <Input
                ref={ref}
                rightInnerComponent={(
                    <button
                        type='button'
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </button>
                )}
                type={showPassword ? 'text' : 'password'}
                {...props}
            />
        </div>
    );
})

export default PasswordInput
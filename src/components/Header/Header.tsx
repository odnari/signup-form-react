import {NavLink} from "react-router-dom";
import clsx from "clsx";

const getNavLinkClassName = ({isActive}: { isActive: boolean }) => {
    return clsx('no-underline text-slate-900 px-2 py-1 rounded', {
        'bg-slate-100 hover:bg-slate-200': isActive,
        'bg-slate-200 hover:bg-slate-300': !isActive
    })
}

export default function Header() {
    return <nav className="flex items-center justify-between w-full border-b bg-white px-2 py-2">
        <div>
            <NavLink to={'/'} className="no-underline text-blue-900 flex font-bold">
                <span className="leading-none ml-1">Demo App</span>
            </NavLink>
        </div>
        <div className="text-sm">
            <NavLink to="/auth/signup" className={getNavLinkClassName}>
                <span className="leading-none ">Sign Up</span>
            </NavLink>
        </div>
    </nav>
}

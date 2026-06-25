import { MailIcon, ChevronDown, PhoneCall, User, Heart, ShoppingCart, Search } from "lucide-react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import type { RootState } from '../redux/store'
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/features/userSlice"

// type NavbarProps = {
//     loggedIn: boolean
// }
// { loggedIn }: NavbarProps
const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const reduxUser = useSelector((store: RootState) => store.user.value)

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(logout())
        navigate("/")
    }

    return (
        <>
            <header>
                <div className="bg-primary">

                    <div className=" container h-[44px] flex justify-between items-center">
                        <div>
                            <ul className="flex gap-6">
                                <li className="flex gap-1 items-center"><MailIcon size={16} className="text-white" /><span className="text-sm text-white">mail@gmail.com</span></li>
                                <li className="flex gap-1 items-center"><PhoneCall size={16} className="text-white" /><span className="text-sm text-white">(12345)67890</span></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex gap-3">
                                <li className="flex gap-1 items-center"><span className="text-sm flex items-end text-white">English<ChevronDown size={16} className="text-white" /></span></li>
                                <li className="flex gap-1 items-center"><span className="text-sm flex items-end text-white">USD<ChevronDown size={16} className="text-white" /></span></li>
                                <li className="flex gap-1 items-center"><NavLink to={'/login'}
                                    className="text-white" ><span className="text-sm flex items-cente">
                                        {
                                            reduxUser ? <>
                                                <span className="mr-1">{reduxUser.firstName}</span>
                                                <button onClick={handleLogout} className="mr-1 cursor-pointer">Logout</button>
                                            </> : "Login"
                                        }
                                        <User size={16} /></span></NavLink></li>
                                <li className="flex gap-1 items-center"><span className="text-sm flex gap-0.5 items-center text-white">Wishlist<Heart size={16} className="text-white" /></span></li>
                                <li className="flex gap-1 items-center"><span className="text-sm flex items-end text-white"><ShoppingCart size={16} className="text-white" /></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container flex items-center justify-between">
                    <span className="font-semibold font-josefin text-[34px] cursor-pointer pr-[85px] text-primary-dark"><Link to="/">Hekto</Link></span>
                    <ul className="flex capitalize gap-[35px]">
                        <li className="flex text-primary-dark items-center cursor-pointer"><NavLink
                            to="/"
                            className={({ isActive }) => `${isActive ? "text-secondary" : ""} flex items-center`}
                        >Home<ChevronDown size={16} /></NavLink></li>
                        <li className="text-primary-dark cursor-pointer">Pages</li>
                        {reduxUser?.email &&
                            <>
                                <li className="text-primary-dark cursor-pointer"><NavLink
                                    className={({ isActive }) => `${isActive ? "text-secondary" : "text-primary-dark"}`}
                                    to="/products"
                                >Products</NavLink></li>
                                <li className="text-primary-dark cursor-pointer">Blog</li>
                                <li className="text-primary-dark cursor-pointer">Shop</li>
                            </>}

                        {reduxUser && reduxUser.isSeller && (
                            <>
                                <span>My Products</span>
                                <span>Carts</span>
                            </>
                        )}
                        <li className="text-primary-dark">Contact</li>
                    </ul>
                    <form className="flex">
                        <input className="border px-2 w-[250px] border-[#E7E6EF]" />
                        <button className="bg-secondary border-[#E7E6EF] h-10 py-2 px-3"><Search size={20} className="inline-block text-[#F3F9FF]" /></button>
                    </form>
                </div>

            </header>
        </>
    )
}

export default Navbar
import { Link } from "react-router-dom"

const BreadCrumb = () => {
    return (
        <div className=" bg-dark-white">
            <div className="container py-[40px] sm:py-[48px] md:py-[56px] lg:py-[64px] xl:py-[80px] 2xl:py-[96px] ">
                <span className="font-josefin text-[36px]">My Account</span>
                <ul className="flex gap-1">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/pages">Pages</Link></li>
                    <li><span className="text-secondary"><Link to="/account" >My Account</Link></span></li>
                </ul>
            </div>
        </div>
    )
}

export default BreadCrumb
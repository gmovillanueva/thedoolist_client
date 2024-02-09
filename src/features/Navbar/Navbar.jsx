import Breadcrumbs from "@components/Breadcrumb.jsx";

const Navbar = (props) => {
    return (
        <nav aria-label='main navbar' className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
            <div>
                <Breadcrumbs/>
                <p></p>
            </div>
        </nav>
    );
};

export default Navbar;
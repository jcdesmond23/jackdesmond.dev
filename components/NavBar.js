import React from 'react'
import Logo from './Logo'
import MenuToggle from './MenuToggle'
import MenuLinks from './MenuLinks'

export default function NavBar(props) {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className="flex w-full justify-center fixed top-4">
            <div className={`flex ${isOpen ? 'flex-col md:flex-row items-center' : ' items-center'} justify-between w-[80%] py-2 px-8 dark:bg-black bg-white border border-neutral dark:border-neutral-900 text-black rounded-3xl shadow-[0_0_10px_rgba(54,150,148,0.2)] dark:shadow-[0_0_10px_rgba(54,150,148,0.3)]`} {...props}>
                <div className="flex items-center justify-between w-full">
                    <Logo/>
                    <MenuToggle toggle={toggle} isOpen={isOpen} />
                </div>
                <MenuLinks isOpen={isOpen} />
            </div>
        </div>
    )
}
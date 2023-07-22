import React from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'

const BreadCrum = (props) => {
    const { title, } = props;

    return (
        <div className='breadcrum mb-0 py-4'>
            <div className="container">
                <div className="flex-row">
                    <div className="w-full mx-auto">
                        <p className='text-center text-white'>
                            <NavLink to='/' className='text-gray-400'>
                                Home&nbsp;/
                            </NavLink>
                            {title} </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BreadCrum

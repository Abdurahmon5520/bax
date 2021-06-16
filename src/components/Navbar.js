import React from 'react';


const Navbar = () => {
    return (
        <div className="col-12">
            <div className="navbar text-success align-items-center">
                <h3>Dustlikdon.uz</h3>
                <div className="input-group-group my-3 input d-flex">
                    <div className="input-group-prepend">
                       <div className="d-flex h-100 align-items-center"><img src="/image/Frame.png" className="w-100" alt="Error"/></div>
                    </div>
                    <input type="text" className="" placeholder="Saytdan izlash"/>
                </div>
                <a href="#" className="mt-2 text-decoration-none text-dark">На руском</a>
                <button type="button" className="btn btn-outline-success rounded">+998990720349</button>
            </div>
        </div>
    );
};

export default Navbar;
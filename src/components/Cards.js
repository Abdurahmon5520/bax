import React from 'react';

const Cards = (props) => {
    return (
        <div className="card cards h-100 bg-white">
            <div className="card-header d-flex justify-content-center p-0 border-0 bg-white">
                <img src={props.rasm} className="" alt="Error"/>
            </div>
            <div className="card-body">
                <div className="d-flex my-2 text-black-50">
                    <img src="/image/packega.svg" className="mr-1" alt="Error"/>
                    <p className="mr-3 mb-0">16:48 / 12.11.20</p>
                    <img src="/image/koz.svg" className="mr-1" alt="Error"/>
                    <p className="mr-3 mb-0">321</p>
                    <img src="/image/sms.svg" className="mr-1" alt="Error"/>
                    <p className="mb-0">100</p>
                </div>
                <h6>{props.head}</h6>
                <p>{props.lorem}</p>
            </div>
            <div className="card-footer border-0 bg-white">
                <button type="button" className="btn btn-outline-success">Batafsil</button>
            </div>
        </div>
    );
};

export default Cards;
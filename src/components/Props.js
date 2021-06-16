import React from 'react';
import Cards from "./Cards";


const Props = () => {
    return (
        <div className="fafafa">
            <div className="container">
                <div className="row">
                    <div className="d-flex w-100 mb-4 top justify-content-between">
                        <div><h3>News</h3></div>
                        <div className="d-flex">
                            <div className="prev"><img src="/image/prev.svg" alt="Error"/></div>
                            <div className="next ml-3"><img src="/image/next.svg" alt="Error"/></div>
                        </div>
                    </div>
                    <div className="col-4">
                        <Cards rasm="/image/rasm1.svg" head="E'LON" lorem=" 'DO`STLIKDONMAXSULOTLARI' AJ ning
                   aksiyadorlari diqqatiga! 2020-yil 27-mart kuni soat 9:00 dan..."/>
                    </div>
                    <div className="col-4">
                        <Cards rasm="/image/rasm2.svg" head="Eksport qiluvchi tadbirkorlik subektlariga..."
                               lorem="“O‘zdonmaxsulot” aksiyadorlik kompaniya tizim korxonalari tomonidan istisno tarikasida maxalliy... "/>
                    </div>
                    <div className="col-4">
                        <Cards rasm="/image/rasm3.svg" head="DOSTLIKDONMAXSULOTLARI AJ boshqaruv raisi..."
                               lorem="DOSTLIKDONMAXSULOTLARI AJ ning boshqaruv raisi tomonidan Do’stlik tumanidagi 2-sonli..."/>
                    </div>


                    <div className="d-flex w-100 mb-4 top justify-content-between">
                        <div><h3>Korxonamiz yangiliklari</h3></div>
                        <div className="d-flex">
                            <div className="prev"><img src="/image/prev.svg" alt="Error"/></div>
                            <div className="next ml-3"><img src="/image/next.svg" alt="Error"/></div>
                        </div>
                    </div>
                    <div className="col-4">
                        <Cards rasm="/image/rasm4.svg" head="E'LON" lorem="2019 yil 27-mart kuni soat 10.00da “Do‘stlikdonmaxsulotlari”
                   aksiyadorlik jamiyati aksiyadorlarining umumiy"/>
                    </div>
                    <div className="col-4">
                        <Cards rasm="/image/rasm5.svg" head="Eksport qiluvchi tadbirkorlik subektlariga..."
                               lorem="DOSTLIKDONMAXSULOTLARI AJ ning boshqaruv raisi tomonidan Do’stlik tumanidagi 2-sonli..."/>
                    </div>
                    <div className="col-4">
                        <Cards rasm="/image/rasm6.svg" head="DOSTLIKDONMAXSULOTLARI AJ boshqaruv raisi..."
                               lorem="Buxgalteriya balansi 2 kvartal bo’yicha foto jamlanma."/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Props;
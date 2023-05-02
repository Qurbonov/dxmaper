import React, {useState} from 'react';
import {MdOutlinePictureAsPdf} from "react-icons/md";

function MXH() {

    return (
        <>
            <div className='container shadow-sm px-5 py-4 rounded-5'>
                <h2 className='my-4 border-bottom'>
                    Ma'lumotnomalar
                </h2>
                <ul className='list-group  list-group-flush'>
                    <li className='list-group-item'>
                        <MdOutlinePictureAsPdf className='mb-1' style={{fontSize: 24, color: '#f40f02'}}/> <a href="/docs/info/Kommisiya_hisoboti_2022.pdf" className='text-decoration-none'>
                        Davlat xaridlari sohasidagi shikoyatlarni ko‘rib chiqish bo‘yicha komissiya tomonidan 2022 yilda ko‘rib chiqilgan murojaatlar va ularnnng natijalari to‘g‘risida ma'lumot
                    </a>
                    </li>
                    <li className='list-group-item'>
                        <MdOutlinePictureAsPdf className='mb-1' style={{fontSize: 24, color: '#f40f02'}}/> <a href="/docs/info/Kommisiya_hisoboti_2023_1_chorak" className='text-decoration-none'>
                        Davlat xaridlari sohasidagi shikoyatlarni ko‘rib chiqish bo‘yicha komissiya tomonidan 2023 yil 1-chorakda ko‘rib chiqilgan murojaatlar va ularnnng natijalari to‘g‘risida ma'lumot
                    </a>
                    </li>
                </ul>

            </div>
        </>
    );
}

export default MXH;

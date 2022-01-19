import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function Slider() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash);   // получаем состояние из хранилища
    console.log(cash.cash);

    return (
        < div >
            Slider
        </div >
    )
}

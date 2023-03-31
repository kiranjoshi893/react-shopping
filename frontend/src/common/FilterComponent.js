import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router';
// import { Form } from 'react-bootstrap';
import { getProductByfilter } from '../services/Auth';

const FilterComponent = (props) => {
    console.log(props, 'category')
    return(
        <div className='product-filter'>
            <h5 className="fw-bold d-flex justify-content-between mb-3">Categories {props.clearFilter ?<span className='small fw-normal text-danger cursor-pointer' onClick={() => props.clearAllFilter()}>Clear</span> : '' }</h5>
            <ul className='list-unstyled'>
                {props.category?.map((data) => {
                    return(
                        <li key={data.id} className="mb-1">
                            <label className='cursor-pointer'>
                                <input checked={props.clearFilter == data.id} value={data.id} type="radio" onChange={(e) => props.getCategoryData(e.target.value)}/>
                                <span>{data.name}</span>
                            </label>
                        </li>
                    )
                })}
            </ul>
            <>
                {/* <input label="Male" type='radio' checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')} />
                <input label="Female" type='radio' checked={gender === 'Female'} value="Female" onClick={() => setGender('Female')} /> */}
            </>
        </div>
    )
}

export default FilterComponent
import React, {useState} from 'react';
// import { Form } from 'react-bootstrap';
import { getProductByfilter } from '../services/Auth';

const FilterComponent = (props) => {
    const [clearFilter, setClearFilter] = useState('')
    const [gender, setGender] = useState('')
    const getCategoryData = (data) => {
        getProductByfilter(data)
        setClearFilter(data)
        console.log(data, clearFilter, 'clearFilter111')
    }
    const clearAllFilter = () => {
        getProductByfilter()
        setClearFilter('')
    }
    const {category} = props
    console.log(category, 'categorycategory')
    return(
        <div className='product-filter'>
            <h6 className="fw-bold d-flex justify-content-between mb-3">Filter by categories {clearFilter ?<span className='small fw-normal text-danger cursor-pointer' onClick={() => clearAllFilter()}>Clear</span> : '' }</h6>
            <ul className='list-unstyled'>
                {category?.map((data) => {
                    return(
                        <li key={data.id} className="mb-1">
                            <label className='cursor-pointer'>
                                <input checked={clearFilter == data.id} value={data.id} type="radio" onClick={(e) => getCategoryData(e.target.value)}/>
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
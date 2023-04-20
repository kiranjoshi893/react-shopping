import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router';
import {Accordion} from 'react-bootstrap';
import { createSearchParams, useSearchParams} from "react-router-dom";
import { FilterAction } from '../action/Action';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../services/Auth';


const FilterComponent = ({applyFilter, category, searchParams}) => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const [theCategory, setTheCategory] = useState([]);
    // const [theColor, setColor] = useState([]);
    // const [theGender, setGender] = useState([]);
    // const [theRating, setRating] = useState([]);
    const getFilter = useSelector((state) => state.filterParams)
    const dispatch = useDispatch()
    const filterAction = (data) => dispatch(FilterAction(data))
    // const [category, setCategory] = useState([
    //     {heading:'Category', data:['shoes', 'clothes']},
    //     {heading:'Color', data:['Black', 'Red', 'White', 'Blue']},
    //     {heading:'Gender', data:['Male', 'Female']},
    //     {heading:'Rating', data:['Ascending', 'Descending']},
    // ])
    // const getResult = (e, data) => {
    //     console.log(data.heading, 'heading')
    //     const newArray1 = [...theCategory]
    //     const newArray2 = [...theColor]
    //     const newArray3 = [...theGender]
    //     const newArray4 = [...theRating]
    //     const ifExit = newArray1.includes(e)
    //     if(newArray1.includes(e) || newArray2.includes(e) || newArray3.includes(e) || newArray4.includes(e)){
    //         newArray1.splice(newArray1.indexOf(e), 1)
    //         newArray2.splice(newArray2.indexOf(e), 1)
    //         newArray3.splice(newArray3.indexOf(e), 1)
    //         newArray4.splice(newArray4.indexOf(e), 1)
    //     }
    //     else{
    //         newArray1.push(e)
    //         newArray2.push(e)
    //         newArray3.push(e)
    //         newArray4.push(e)
    //     }
    //     if(data.heading === 'Category'){
    //         setTheCategory(newArray1)
    //     }
    //     else if(data.heading === 'Color'){
    //         setColor(newArray2)
    //     }
    //     else if(data.heading === 'Gender'){
    //         setGender(newArray3)
    //     }
    //     else if(data.heading === 'Rating'){
    //         setRating(newArray4)
    //     }
    // }
    // useEffect(() => {
    //     setSearchParams({category:theCategory, color:theColor, gender:theGender, rating:theRating });
    //     console.log(searchParams, 'searchParamssearchParamssearchParams11312')
    // },[theCategory, theColor, theGender, theRating, searchParams])
    return(
        <div className='product-filter'>
                {category?.map((data, index) => {
                    return(
                        <Accordion key={`${index}_${data.heading}`} defaultActiveKey={index}>
                            {/* {test} */}
                            <Accordion.Item eventKey={index} className="mb-3">
                                <Accordion.Header>{data.heading}</Accordion.Header>
                                <Accordion.Body className="accordion-body pt-0 pb-2 px-2">
                                    <ul className='list-unstyled'>
                                        {data.data.map((val, index) => {
                                            return(
                                                <li key={`${index}_${val}`} className="mb-1">
                                                <label className='cursor-pointer'>
                                                    <input value={val} type="checkbox" onChange={
                                                        (e) => applyFilter(e.target.value, data, searchParams)}/>
                                                    <span>{val}</span> 
                                                </label>
                                            </li>
                                            )
                                        })}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })}
        </div>
    )
}

export default FilterComponent
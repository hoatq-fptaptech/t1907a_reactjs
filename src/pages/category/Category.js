import React,{useState,useEffect} from 'react';
import Grid from "../../components/grid/Grid";
import {useParams} from 'react-router-dom';
export default function Category() { // reactHook
    const [products,setProduct] = useState([]);
    /*
        this.state= {
            products:[];
        }
     */
    const {id} = useParams();
    useEffect(()=>{
        fetch("https://foodgroup.herokuapp.com/api/category/"+id)
            .then(rs=>rs.json())
            .then(rs=>{
                setProduct(rs.data.foods)
            })
    }) // componentDidUpdate
    return (
        <Grid products={products}/>
    )

}
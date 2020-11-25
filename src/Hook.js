import React,{useState,useEffect} from 'react'
import {api,url} from "./services/Apdapter";
import {Category} from "./services/models/Category";
import {Bar} from "react-chartjs-2";

export default function Hook(props) {
    const [lucky,setLucky] = useState(1);
    const [num,setNum] = useState(props.number);
    const [menu,setMenu] = useState([]);
    const changeLucky = ()=>{
        setLucky(lucky+1);
    }
    const getMenu = async ()=>{
        const rs = await api.get(url.food_menu.url);
        if(rs.status === 200){
            const cats = await rs.data.data.map(e=>{
                return new Category(e);
            })
            setMenu(cats);
        }
    }
    useEffect(()=>{
        getMenu();
    },[]);
    useEffect(()=>{
        console.log("lucky updated");
    })
    return (
        <div>
            <Bar data={data} options={options} />
            <ul>
            {
                menu.map((e,i)=>{
                    return <li key={i}>{e.name}</li>
                })
            }
            </ul>
            <h1>Number: {num}</h1>{console.log("render")}
            <button type="button" onClick={()=>setNum(num+1)}>Update Num</button>
            <h1>Lucky: {lucky}</h1>
            <button onClick={changeLucky} type="button">Update Lucky</button>
        </div>
    );
}
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
}

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}

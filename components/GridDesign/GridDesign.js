import { useEffect, useState } from "react"
import anime from "animejs/lib/anime.js"

export default function Home() {
    const [grid, setGrid] = useState([0, 0])

    useEffect(() => {
        const {innerWidth, innerHeight} = window;

        const row = Math.floor(innerHeight / 60);
        const col = Math.floor(innerWidth / 60);
        console.log(row, col, grid);
        setGrid([row, col])
    },[])

    const tiles = { 
        display: 'grid',
        gridTemplateColumns: `repeat(${grid[1]}, 1fr)`,
        gridTemplateRows: `repeat(${grid[0]}, 1fr)`,
        backgroundColor: 'yellow'
    }
    const tile = {
        display: 'inline-block',
        aspectRatio: '1/1',
  
        boxSizing: 'border-box',
        // border: '1px solid white',
    }
    const colors = ['#ff7f50', 'rgb(253, 216, 53)'];
    
    const count = -1;
    const handleOnclick = (index) => {
        count = count + 1;
        let animation = anime({
            targets: '.tile',
            backgroundColor: colors[count%(colors.length)],
            delay: anime.stagger(30, {
                grid: [grid[1], grid[0]],
                from: index
            }),
          }); 
        console.log(index)      
        console.log(animation)
    }

    return (
        <>
            <div style={tiles}>
                {Array.from(Array(grid[0] * grid[1])).map((atile, index) => (
                    <div style={tile} className='tile' key={index} onClick={() => handleOnclick(index)} ></div>
                ))}
            </div>
        </>
    )
}
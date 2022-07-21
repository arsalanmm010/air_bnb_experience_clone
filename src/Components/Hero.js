import grid from './grid.png'

export default function Hero() {
  return (
    <div>
        <div className='imgs'>
           <img src={grid} className="grid"/>
        </div>
        <div className='content'>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
                one-of-a-kind hosts-all without leaving 
                home.</p>
        </div>
    </div>
  )
}

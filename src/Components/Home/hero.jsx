import Button from '../Button/button';
import './hero.css'

function Hero(obj){
    return <>
    <div className='hero-container'>
        <div className='first-section'>
            <div className='first-content'>
            <h1>{obj.head1} <br /> <span>{obj.head2}</span></h1>
            <p>{obj.para1}</p>
            <div className='btns'>
                <Button BtnName="Search Now" id="searchBtn"/>
                <Button BtnName="Know More" id="knowBtn"/>
            </div>
            </div>
        </div>
        <div className='second-section'>
            <img src={obj.img2} alt="" />
            <div className='right'>
                <div className='right-content'>
                <h2>{obj.rightHead}</h2>
                <p>{obj.para2}</p>
                <Button BtnName="Get in Touch" id="touch"/>
                </div>
            </div>
        </div>
    </div>
    </>
} 
export default Hero;
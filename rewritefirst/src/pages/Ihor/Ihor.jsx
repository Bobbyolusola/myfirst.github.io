
const Ihor = () => {
    console.log('Ihor');
    const handleButtonClick = () => {
        console.log('Click')
    }
    return(
        <div className='wrapper'>
            <h3>Ihor</h3>
            <span>Ihors changes</span>
            <Button title='Click me' handleClick={handleButtonClick}/>
        </div>
    )
}
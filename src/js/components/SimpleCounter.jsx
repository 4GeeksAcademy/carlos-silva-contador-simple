const SimpleCounter = (porps) => {
    const { numberOne, numberTwo, numberTree, numberFor, numberFive, numberSix } = porps
    return (
        <div className="container text-center col-6 bg-black p-4  text-black fs-2 border border-4">
            <div className="row">
                <div className=" col-12 number-clock ">
                    <div className=" bg-secondary border border-2 ">
                        <i class="fa-solid fa-clock"></i>
                    </div>
                    <div className=" bg-secondary  border border-2 ">
                        {Math.floor(numberFive % 10)}
                    </div>
                    <div className=" bg-secondary  border border-2  ">
                        {Math.floor(numberFor % 10)}
                    </div>
                    <div className=" bg-secondary   border border-2 ">
                        {Math.floor(numberTree % 10)}
                    </div>
                    <div className=" bg-secondary  border border-2  ">
                        {Math.floor(numberTwo % 10)}
                    </div>
                    <div className=" bg-secondary  border border-2  ">
                        {Math.floor(numberOne % 10)}
                    </div>
                </div>
            </div>
        </div>









    )
}
export default SimpleCounter
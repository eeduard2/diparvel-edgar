import React from "react"
const inicio = () => {
    return (
        <div >
       <br/>
       <br/>
       <br/>
        <div className="carousel-wrapper">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
             <img src={"https://alfabetajuega.com/hero/2021/12/Pokemon-GO-pokemon-destacado-en-enero-2022.jpg?width=480&aspect_ratio=19:10"} width="1000"/>
          </div>
          <div className="carousel-item">
             <img src={"https://media.vandal.net/i/1200x630/10-2021/2021105724573_1.jpg"} width="1000"/>
          </div>
          <div className="carousel-item">
             <img src={"https://www.tonica.la/__export/1607472002376/sites/debate/img/2020/12/08/pokxmon-los-5-mxs-poderosos_1.jpg_1037907269.jpg"} width="1000"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
    

         </div>
      );
      
}

export default inicio 
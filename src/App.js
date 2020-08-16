import React, { Fragment } from 'react';
import './styles/styles.scss';
import Curso from './Curso'

const cursos = [
    {
        title: "React desde cero",
        image: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        price: 50,
        profesor: "Alexander"
    },
    {
        title: "Go desde cero",
        image: "https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        price: 40,
        profesor: "Sam"
    }, 
    {
        title: "Java desde cero",
        image: "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        price: 60,
        profesor: "Lorena"
    }, 
    {
        title: "HTML desde cero",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        price: 30,
        profesor: "Yoda"
    }
]

const App = () => (
    <Fragment>
        <div className="main-banner img-container l-section" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" alt="banner" src="https://images.pexels.com/photos/1930009/pexels-photo-1930009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">mi primera app</p>
                    <p> Me encanta react</p>
                    <a href="https://ed.team" className="button">Aprender mas</a>
                </div>
                </div>
            </div>
        </div>
        <div className="ed-grid m-grid-3">
            {
                cursos.map( curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} /> )
            }
  
        </div>
    </Fragment>

)

export default App;




/*
REGLAS

1. Toda etiqueta debe cerrarse.
2. Los elementos deben volver un solo elemento padre.
3. Apoyarse de los fragments cuando necesito devolver dos elementos

ETIQUETAS ESPECIALES

4. img siempre se cierra
5. class se escribe con className=""
6. for se escribe htmlFor
7. No se puede usar if, else, while, para poder utilizarlos

*/

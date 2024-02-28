export function Boton({children, manejarclick}) {

    return(

        <article>

            <button className='calculadora-button' onClick={()=> manejarclick(children)}>{children}</button>
   

        </article>

    )

}
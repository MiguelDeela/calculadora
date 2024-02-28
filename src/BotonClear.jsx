export function BotonClear({children, clear}){
    return(
        <article>
            <button className='btn-clear' onClick={() => clear()}>{children}</button>
        </article>
    )
}
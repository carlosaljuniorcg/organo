import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    const Time ({time, colaboradores, aoDeletar}) = {}

    return (
        (props.colaboradores.length > 0) ? <section className='time'style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>,
            <div className='colaboradores'>
            {colaboradores.map((colaborador, indice) => {
                return <Colaborador 
                key={indice} 
                colaborador={colaborador} 
                corDeFundo={Time.corSecundaria}
                aoDeletar={aoDeletar}
            />
            })}
            </div>
        </section>
        : ''
    )
}

export default Time
import React from 'react';

class Botao extends React.Component{
    render() {
        
        const backgroundColor = 'yellow'
        const styles = {
            backgroundColor
        }

        return (
            <button style={{
                backgroundColor
            }}>
                Botão
            </button>
        )
    }
}

export default Botao;
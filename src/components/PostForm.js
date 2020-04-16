import React, { useEffect, useState } from 'react';

export default function PostForm(props) {

    const [nome, setNome] = useState('');

    function submit(e) {
        e.preventDefault();
        props.onSaveSucess();
    }

    return(
        <>
            <h2>PostForm.js:</h2>
            <form onSubmit={submit}>
                <label>Nome:</label>
                <input
                    type="text"
                    name={nome}
                    onChange={e => {
                        setNome(e.target.value);
                    }}
                />
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}
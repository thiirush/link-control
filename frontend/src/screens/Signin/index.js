import React from 'react';
import {Link } from 'react-router-dom'

const SignIn = () =>{
    return (
        <div className="container h-100 pt-5">
            <h1>Àrea de acesso</h1>
            <div className="d-flex flex-column h-100">
                <form>
                    <div className="form-group">
                        <label>Email</label>    
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Senha</label>    
                        <input className="form-control" type="password" />
                    </div>

                    <div>
                        <button className="btn btn-primary btn-round">Enviar</button>
                    </div>                     
                </form>
               
                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Não possui cadastro?</div>
                    <Link to="/sign-up">Cadastre-se clicando aqui.</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
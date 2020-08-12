import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { signUp } from "../../actions/AccountActions";

const SignUp = (props) => {
  const { signUp, account } = props;
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    signUp(data);
  };

  if (account) {
    return <Redirect to="/manage/links" />;
  }
  return (
    <div className="container h-100 pt-5">
      <h1>Cadastro</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" name="email" />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input className="form-control" type="password" name="password" />
          </div>

          <div className="form-group">
            <label>Confirmação de senha</label>
            <input
              className="form-control"
              type="password"
              name="password_confirmation"
            />
          </div>
          <div>
            <button className="btn btn-primary btn-round">Enviar</button>
          </div>
        </form>

        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Já possui cadastro?</div>
          <Link to="/sign-in">Entrar</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
  };
};

export default connect(mapStateToProps, { signUp })(SignUp);

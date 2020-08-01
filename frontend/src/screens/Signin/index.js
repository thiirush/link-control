import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "./SigninActions";

const SignIn = (props) => {
  const { signIn, account } = props;

  if (account) return <Redirect to="/manage/links" />;

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);

    signIn(data);
  };

  console.log("****SignIn.account", account);
  return (
    <div className="container h-100 pt-5">
      <h1>Área de acesso</h1>
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
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.signIn.account,
  };
};

export default connect(mapStateToProps, { signIn })(SignIn);

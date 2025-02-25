import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
        <section className="">
        <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
            <div className="container">
            <div className="row gx-lg-5 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                    The best offer <br />
                    <span className="text-primary">for your business</span>
                </h1>
                <p style={{color: "hsl(217, 10%, 50.8%)"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                    quibusdam tempora at cupiditate quis eum maiores libero
                    veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                    <div className="card-body py-5 px-md-5">
                    <form>
                        <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" id="form3Example3" className="form-control" />
                        <label className="form-label">Email address</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" id="form3Example4" className="form-control" />
                        <label className="form-label">Password</label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                        <label className="form-check-label">
                            Save log in
                        </label>
                        </div>

                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                        Sign in
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

  )
}

export default Login
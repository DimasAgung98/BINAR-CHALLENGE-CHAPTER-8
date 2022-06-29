import React from 'react'
import '../css/Form.css'


function FormCreateUser() {
  return (
    <>
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                <div class="card my-5 pt-3">
                    <form class="card-body cardbody-color" method='POST'>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="Username" aria-describedby="username" placeholder="Username"/>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="Email" aria-describedby="email" placeholder="Email"/>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="password" placeholder="password"/>
                        </div>
                        <div class="mb-3">
                            <input type="number" class="form-control" id="Level" aria-describedby="level" placeholder="Level"/>
                        </div>
                        <div class="mb-3">
                            <input type="number" class="form-control" id="EXP" aria-describedby="experience" placeholder="EXP"/>
                        </div>
                    </form>
                    <a href='/api/v1/players' class="text-center"><button class="btn btn-success px-5 mb-2 w-100">SUBMIT</button></a>
                    <a href='/api/v1/players' class="text-center"><button class="btn btn-primary w-100">BACK</button></a>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormCreateUser
import React from "react";
import Image from './img/me.jpg';
import Navbar from "./Navbar";

function Profil() {
    return (
        <>
        <Navbar />
            <div class="main-content position-relative max-height-vh-100 h-100">
                <div class="container-fluid px-2 px-md-4">
                    <div class="page-header min-height-300 border-radius-xl mt-4">
                        <span class="mask  bg-gradient-primary  opacity-6"></span>
                    </div>
                    <div class="card card-body mx-3 mx-md-4 mt-n6">
                        <div class="row gx-4 mb-2">
                            <div class="col-auto">
                                <div class="avatar avatar-xl position-relative">
                                    <img src={Image} alt="profile_image" class="w-100 border-radius-lg shadow-sm" />
                                </div>
                            </div>
                            <div class="col-auto my-auto">
                                <div class="h-100">
                                    <h5 class="mb-1">
                                        Tsila
                                    </h5>
                                    <p class="mb-0 font-weight-normal text-sm">
                                        Second
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                <div class="nav-wrapper position-relative end-0">

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="row">

                                <div class="col-12 col-xl-4">
                                    <div class="card card-plain h-100">
                                        <div class="card-header pb-0 p-3">
                                            <div class="row">
                                                <div class="col-md-8 d-flex align-items-center">
                                                    <h6 class="mb-0">Profile Information</h6>
                                                </div>
                                                <div class="col-md-4 text-end">
                                                    <a href="javascript:;">
                                                        <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit Profile" data-bs-original-title="Edit Profile"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body p-3">
                                            <p class="text-sm">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio unde illo voluptatibus tenetur sapiente architecto! Iure, voluptates eveniet expedita perspiciatis consequuntur nobis aliquam, ad nam incidunt, vel dignissimos aut!</p>
                                            <hr class="horizontal gray-light my-4" />
                                            <ul class="list-group">
                                                <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">Full Name:</strong> .......</li>
                                                <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Mobile:</strong> &nbsp;.............</li>
                                                <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Email:</strong> &nbsp; ............@mail.com</li>
                                                <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Location:</strong> &nbsp; .......</li>
                                                <li class="list-group-item border-0 ps-0 pb-0">
                                                    <strong class="text-dark text-sm">Social:</strong> &nbsp;
                                                    <a class="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="">
                                                        <i class="fab fa-facebook fa-lg"></i>
                                                    </a>
                                                    <a class="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="">
                                                        <i class="fab fa-twitter fa-lg"></i>
                                                    </a>
                                                    <a class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="">
                                                        <i class="fab fa-instagram fa-lg"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Profil;

import React, {Component} from "react";
import {Link} from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";

import logo from "../assets/images/Logo.png";

import '../assets/styles/contact.css';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //firstName
        if (!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "Gelieve je voornaam in te vullen.";
        }

        if (typeof fields["firstName"] !== "undefined") {
            if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["firstName"] = "gebruik enkel grote en kleine letters.";
            }
        }

        //LastName
        if (!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "Gelieve je familienaam in te vullen.";
        }

        if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["lastName"] = "gebruik enkel grote en kleine letters.";
            }
        }

        //Email
        if (!fields["Email"]) {
            formIsValid = false;
            errors["Email"] = "Gelieve je e-mail adres in te vullen.";
        }

        if (typeof fields["Email"] !== "undefined") {
            let lastAtPos = fields["Email"].lastIndexOf('@');
            let lastDotPos = fields["Email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["Email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["Email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["Email"] = "Email is niet geldig.";
            }
        }

        //Tel
        if (!fields["Tel"]) {
            formIsValid = false;
            errors["Tel"] = "telefoon verplicht";
        }

        if (typeof fields["Tel"] !== "undefined") {
            if (!fields["Tel"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["Tel"] = "Gebruik enkel grote en kleine letters.";
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            alert("Form submitted");
        } else {
            alert("Form has errors.")
        }

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }


    render() {
        return (
            <div className="container-fluid">

                <div className="contactHeader">
                    <div className="row contact">
                        <div className="col-9 col-sm-9 col-lg-4 p-5">
                            <Link to="/">
                                <img src={logo} alt="logo" width="100%" className="logoImg"/>
                            </Link>
                        </div>

                        <div className="col-3 col-sm-3 col-lg-8 pt-5 d-flex justify-content-center">
                            <Nav/>
                        </div>

                        <div className="col-12 text-center">
                            <div className="container p-3">
                                <h1 className="text-white p-3"> Contact </h1>
                                <p className="headerTitle text-white p-3">Steven staat steeds voor u klaar!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 p-5">
                            <h2 className="contentTitle text-secondary text-center pt-5">DAKWERKEN LAGAERT STEVEN UIT
                                EVERGEM</h2>

                            <h2 className="text-center p-3">Onze gegevens</h2>

                            <p className="contentText p-2">Wenst u meer informatie over het dienstenpakket
                                of
                                wil u
                                een offerte
                                aanvragen?
                                <br/>
                                Contacteer Steven dan via onderstaande gegevens of vul het contactformulier
                                in.</p>

                            <div className="container p-5 ml-3">
                                <a href="https://goo.gl/maps/UhEHFrsD3Eh1ZoR89" target="_blank" rel="noreferrer"
                                   className="text-decoration-none text-dark">
                                    <p>
                                        <i className="fas fa-map-marker-alt text-warning mr-2 mt-2"/>
                                        Durmestraat 28, 9940 Evergem
                                    </p>
                                </a>

                                <a href="tel: 0032497219273" className="text-decoration-none text-dark">
                                    <p>
                                        <i className="fas fa-mobile-alt text-warning mr-2"/>
                                        0497/21.92.73
                                    </p>
                                </a>

                                <a href="mailto: info@dakwerken-lagaertsteven.be"
                                   className="text-decoration-none text-dark">
                                    <p>
                                        <i className="fas fa-envelope-open text-warning mr-2"/>
                                        info@dakwerken-lagaertsteven.be
                                    </p>
                                </a>


                                <p><i className="fas fa-building text-warning mr-2"/>BE 0732.478.078</p>
                            </div>
                        </div>


                        <div className="col-sm-12 col-lg-6 p-5">

                            <h2 className="text-center p-3">Contactformulier</h2>

                            <p className="contentText text-center p-2">Stel hieronder uw vraag en Steven helpt u zo snel
                                mogelijk verder.</p>


                            <div className="container p-5">
                                <form name="contactform" onSubmit={this.contactSubmit.bind(this)}>
                                    <fieldset>
                                        <ul className="list-unstyled">
                                            <li>
                                                <input
                                                    type="text"
                                                    required={true}
                                                    placeholder="Voornaam"

                                                    ref="firstName"
                                                    onChange={this.handleChange.bind(this, "firstName")}
                                                    value={this.state.fields["firstName"]}
                                                />

                                                <span style={{color: "red"}}>{this.state.errors["firstName"]}</span>
                                            </li>

                                            <li>
                                                <input
                                                    type="text"
                                                    required={true}
                                                    placeholder="familienaam"

                                                    ref="lastName"
                                                    onChange={this.handleChange.bind(this, "lastName")}
                                                    value={this.state.fields["lastName"]}
                                                />

                                                <span style={{color: "red"}}>{this.state.errors["lastName"]}</span>
                                            </li>

                                            <li>
                                                <input
                                                    type="text"
                                                    required={true}
                                                    placeholder="Adres"

                                                    ref="Address"
                                                    onChange={this.handleChange.bind(this, "Address")}
                                                    value={this.state.fields["Address"]}
                                                />

                                                <span style={{color: "red"}}>{this.state.errors["Address"]}</span>
                                            </li>

                                            <li>
                                                <input
                                                    type="text"
                                                    required={true}
                                                    placeholder="Telefoon"

                                                    ref="Tel"
                                                    onChange={this.handleChange.bind(this, "Tel")}
                                                    value={this.state.fields["Tel"]}
                                                />

                                                <span style={{color: "red"}}>{this.state.errors["Tel"]}</span>
                                            </li>

                                            <li>

                                                <input
                                                    type="email"
                                                    required={true}
                                                    placeholder="Email"

                                                    ref="Email"
                                                    onChange={this.handleChange.bind(this, "Email")}
                                                    value={this.state.fields["Email"]}
                                                />

                                                <span style={{color: "red"}}>{this.state.errors["Email"]}</span>
                                            </li>

                                            <li>
                                                <input
                                                    placeholder="Schrijf hier je bericht"
                                                    required={true}
                                                    ref="Mess"
                                                    onChange={this.handleChange.bind(this, "Mess")}
                                                    value={this.state.fields["Mess"]}
                                                />
                                            </li>

                                            <li>


                                                <div className="container">
                                                    <input
                                                        type="checkbox"
                                                        required={true}
                                                        className="mr-2"
                                                    />
                                                Ik ga ermee akkoord dat de ingevoerde informatie gebruikt zal worden om
                                                    contact met mij op te nemen.</div>
                                            </li>

                                            <li>
                                                <input type="submit" className="mt-5"/>
                                            </li>
                                        </ul>
                                    </fieldset>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer/>

            </div>

        )
    }
}


export default Contact;
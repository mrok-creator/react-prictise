import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import s from "./module.module.css";

class Modal extends Components {

    render() {
        return (
            <div className={s.overlay}>
                <div className={s.modal} >
                    <button className={s.closeBtn}>Close </button>
                </div>
            </div>
        )
    }
}

export default Modal;

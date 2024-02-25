import React from "react";
import "./Button.css"

function Button(props) {
    return(
        <div className={props.className}>
            <a 
                class="main-button"
                href={props.href}
                target={props.newTab && "_blank"}
                style={{
                    color: props.theme.body,
                    backgroundColor: props.theme.text,
                    border: `solid 1px ${props.theme.text}`,
                }}

            >
                {props.text}

            </a>
        </div>
    );
}

export default Button;
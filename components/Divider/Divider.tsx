import React from "react";

function Divider () {
    return(
        <React.Fragment>
        <hr></hr>
        <style jsx>
                {`
                    hr{
                        color: #bbb;
                        background-color: #bbb;
                        height: 0.5px;
                        width: 80%;
                        margin: 16px;
                    }
                `}
            </style>
        </React.Fragment>
    )
}
export default Divider;
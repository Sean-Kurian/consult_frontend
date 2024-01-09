import React, { useState } from "react";
import LoginForm from "../components/loginForm.js";
import "./Login.css";

function LoginScreen(props) {
    return (
        <div className="div">
            <div className="div-2">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/183e25d8162ffa8893ba4dc49046d8e11412b832882b2086f55a591afcc0d400?apiKey=85571368d2fa463cbdd75fd333f2187e&"
                    className="img"
                />
                <div className="div-3">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
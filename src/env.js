export const kakaoAuthUrl = "https://kauth.kakao.com/oauth/authorize?client_id=0479a7dcff6f8c5692a91c16cc73977a&redirect_uri=http://localhost:3000/auth/kakao/callback&response_type=code"

/*
const KAKAO_OAUTH_URL = () => {
    const console = require("better-console");
    const express = require("express");
    const qs = require("qs");
    const axios = require("axios");

    const router = express.Router();

    const kakao = {
    clientID: "0479a7dcff6f8c5692a91c16cc73977a",
    clientSecret: "kZeXcHeGofTT7KAvvpv8eQsdspqkf1Ni",
    redirectUri: "http://localhost:3000/auth/kakao/callback"
    };

    router.get("/", (req, res) => {
        const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${
        kakao.clientID
        }&redirect_uri=${kakao.redirectUri}&response_type=code`;
    
        return res.redirect(kakaoAuthUrl);
    });
    }

export default KAKAO_OAUTH_URL;*/
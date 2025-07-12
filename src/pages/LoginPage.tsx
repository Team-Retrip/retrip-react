import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorImage from '../assets/Error.svg';
import KakaoImage from '../assets/Kakao.svg';
import NeverImage from '../assets/Never.svg';
import GoogleImage from '../assets/Google.svg';
import AppleImage from '../assets/Apple.svg';

import CustomSvgImage from '../components/SvgImage';
import BackImage from '../components/BackImage';

class LoginPage extends React.Component {
    state = {
        username: '',
        password: '',
        error: null,
        isButtonEnable: false,
    };

    handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ username: e.target.value });
        const isButtonEnable = e.target.value.length > 0 && this.state.password.length > 0;
        this.setState({ isButtonEnable });
    };

    handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: e.target.value });
        const isButtonEnable = this.state.username.length > 0 && e.target.value.length > 0;
        this.setState({ isButtonEnable });
    };

    handleLogin = () => {
        console.log('Login button clicked');
        const { username, password } = this.state;
        if (!username || !password) {
            return;
        }
        // Simulate a login API call
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            this.setState({ error: null });
        } else {
            this.setState({ error: '이미 가입된 이메일입니다.' });
        }
    };

    kakaoLogin = () => {
        // Implement Kakao login logic here
        console.log('Kakao login clicked');
        // 카카오 로그인 성공 후 MainPage로 이동
        window.location.href = '/main';
    };

    neverLogin = () => {
        // Implement Never login logic here
        console.log('Never login clicked');
    };

    appleLogin = () => {
        // Implement Apple login logic here
        console.log('Apple login clicked');
    };

    googleLogin = () => {
        // Implement Google login logic here
        console.log('Google login clicked');
    };

    render() {
        const { username, password, error, isButtonEnable } = this.state;

        return (
            <div className="login-page">
                <BackImage />
                <h1 className="title">로그인</h1>
                <div className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">이메일</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={this.handleUsernameChange}
                            placeholder="이메일"
                        />
                        <div className="error-message-container">
                            {error && (
                                <>
                                    <CustomSvgImage iconName={ErrorImage} size={18} />
                                    <span className="error-message">
                                        {error}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={this.handlePasswordChange}
                            placeholder="비밀번호"
                        />
                        <div className="error-message-container">
                            {error && (
                                <>
                                    <CustomSvgImage iconName={ErrorImage} size={18} />
                                    <span className="error-message">
                                        {error}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="password-reset">
                        <a href="/reset-password">비밀번호가 기억나지 않으신가요?</a>
                    </div>
                    <div className="social-login-button-container">
                        <div className="social-login-button kakao" onClick={this.kakaoLogin}>
                            <CustomSvgImage iconName={KakaoImage} size={28} />
                        </div>
                        <div className="social-login-button never" onClick={this.neverLogin}>
                            <CustomSvgImage iconName={NeverImage} size={28} />
                        </div>
                        <div className="social-login-button apple" onClick={this.appleLogin}>
                            <CustomSvgImage iconName={AppleImage} size={28} />
                        </div>
                        <div className="social-login-button google" onClick={this.googleLogin}>
                            <CustomSvgImage iconName={GoogleImage} size={28} />
                        </div>
                    </div>
                    <div onClick={this.handleLogin} className={"login-button" + (isButtonEnable ? " active" : "")}>
                        로그인
                    </div>
                </div>
            </div>
        );
    }
}

export { LoginPage };
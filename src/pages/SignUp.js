import React, { useRef } from 'react'

const SignUp = () => {
  const idRef = useRef()
  const pwRef = useRef()

  const onSignUp = () => {
    if (idRef.current.value === '') {
      alert('아이디를 입력하세요.')
      return
    }

    if (pwRef.current.value === '') {
      alert('비밀번호를 입력하세요.')
      return
    }
    const auth = getAuth()
    createUserWithEmailAndPassword(
      auth,
      idRef.current.value,
      pwRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
        if (error.code === 'auth/invalid-email') {
          alert('유효하지 않은 이메일입니다.')
        }
      })
  }

  const onPressEnter = (e) => {
    if (e.key == 'Enter') {
      onSignUp()
    }
  }

  return (
    <div className="SignUpPage">
      <div className="box">
        <div className="title">DCOM STUDY 회원가입</div>
        <div className="subTitle">
          DCOM STUDY 계정으로 모든 서비스 이용이 가능합니다.
        </div>
        <div className="info">아이디</div>
        <input
          placeholder="이메일 형식 (example@abc.de)"
          ref={idRef}
          onKeyPress={onPressEnter}
        ></input>
        <a className="findAccount"></a>
        <div className="info">비밀번호</div>

        <input
          placeholder="영문+숫자 조합"
          type={'password'}
          ref={pwRef}
          onKeyPress={onPressEnter}
        ></input>
        <button className="signUpBtn" onClick={onSignUp}>
          회원가입
        </button>
      </div>
    </div>
  )
}

export default SignUp

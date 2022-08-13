import React, { useState, useRef, useContext } from 'react';
import { useAuth } from '../Context/auth';
import { edit } from '../store/temp/Reducer';

function EditProfile ({ show }) {
    const auth = useAuth();
    const {user} = auth;

    const [myimage, setMyImage] = useState(user.profileImage);
    const [mynickname, setMyNickname] = useState(user.nickname);
    const [mymotto, setMyMotto] = useState(user.motto);
    const onChange = (e) => {
        if (e.target.name === 'mynickname') {
          setMyNickname(e.target.value);
        }
        if (e.target.name === 'myimage') {
          setMyImage(e.target.value);
        }
        if (e.target.name === 'mymotto') {
          setMyMotto(e.target.value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (mynickname.length === 0) {
          window.alert('별명은 한 글자 이상 작성해주세요');
          nicknameRef.current.focus();
        } else {
          if (window.confirm('수정하시겠습니까?')) {
            dispatch(
                edit({
                    motto: mymotto,
                    nickname: mynickname,
                    profileImage: myimage
                })
            );
            setIsEdit(false);
          } else {

          }
        }
    };
    const onClick = () => {
        setIsEdit(false);
    };
    const onFileChange = (event) => {
        const theFile = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const result = finishedEvent.currentTarget.result;
            setMyImage(result);
        };
        reader.readAsDataURL(theFile);
    };
    const inputRef = useRef(null);
    const nicknameRef = useRef();
    const handleButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <div>
                <div className="EditProfile">
                    <div>
                        <h1>
                            {myimage && (
                                <p>
                                    <img
                                        src={myimage}
                                        width="500px"
                                        height="300px"
                                    />
                                </p>
                            )}

                            <button
                                style={{ margin: '30px' }}
                                onClick={handleButtonClick}
                            >
                                이미지 찾기
                            </button>
                            <input
                                accept="image/*"
                                type="file"
                                onChange={onFileChange}
                                style={{ display: 'none' }}
                                ref={inputRef}
                            />
                        </h1>
                    </div>
                    <div>
                        <h1>
                            {' '}
                            이름 : <input type="text" value={user.name} />
                        </h1>
                        <h1>
                            별명 :
                            <input
                                name="mynickname"
                                value={mynickname}
                                type="text"
                                onChange={onChange}
                                ref={nicknameRef}
                            />
                        </h1>
                        <h1>
                            email : <input type="text" value={user.email} />
                        </h1>
                        <h1>
                            나의 좌우명 :
                            <input
                                name="mymotto"
                                value={mymotto}
                                type="text"
                                onChange={onChange}
                            />
                        </h1>
                    </div>
                </div>
                <div>
                    <button onClick={onClick}>취소하기</button>
                    <button className={"light"} onClick={onSubmit}>수정하기</button>
                </div>
            </div>
    );
}

export default EditProfile;

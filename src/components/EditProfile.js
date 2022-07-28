import { isValidTimestamp } from '@firebase/util';
import { useState } from 'react';
import FriendsProfile from './FriendsProfile';
import { useDispatch, useSelector } from 'react-redux';
import { edit, register } from './../Reducer';
function EditProfile({ setIsEdit }) {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
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
        if (window.confirm('수정하시겠습니까?')) {
            dispatch(
                edit({
                    motto: mymotto,
                    nickname: mynickname,
                    profileImage: myimage,
                })
            );
            setIsEdit(false);
        } else {
            return;
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
    return (
        <div>
            <h1>My Profile</h1>
            <div>
                <form onSubmit={onSubmit}>
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
                        />
                    </h1>
                    <h1>
                        {myimage && (
                            <p>
                                <img
                                    src={myimage}
                                    width="100px"
                                    height="100px"
                                />
                            </p>
                        )}
                        <input
                            accept="image/*"
                            type="file"
                            onChange={onFileChange}
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
                    <h1>
                        <input type="submit" value="수정하기" />{' '}
                    </h1>
                    <div>
                        <button onClick={onClick}>cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;

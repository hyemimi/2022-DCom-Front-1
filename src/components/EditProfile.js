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
        dispatch(
            edit({
                motto: mymotto,
                nickname: mynickname,
                profileImage: myimage,
            })
        );
        setIsEdit(false);
    };
    const onClick = () => {
        setIsEdit(false);
    };
    return (
        <div>
            <h1>My Profile</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <h1> 이름 : {user.name}</h1>
                </div>
                <div>
                    <h1>
                        별명 :
                        <input
                            name="mynickname"
                            value={mynickname}
                            type="text"
                            onChange={onChange}
                        />
                    </h1>
                </div>
                <div>
                    <h1>
                        프로필이미지 :
                        <input
                            name="myimage"
                            value={myimage}
                            type="text"
                            onChange={onChange}
                        />
                    </h1>
                </div>
                <div>
                    <h1>email : {user.email}</h1>
                </div>
                <div>
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
                <div>
                    <input type="submit" value="수정하기" />
                </div>
            </form>
            <div>
                <button onClick={onClick}>cancel</button>
            </div>
        </div>
    );
}

export default EditProfile;

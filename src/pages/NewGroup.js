import GroupItem from '../components/GroupItem';
import FriendsProfile from '../components/FriendsProfile';
import { createGroup } from './../store/group';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/auth';

function NewGroup() {
    const auth = useContext(AuthContext);
    const [groupname, setGroupName] = useState('');
    const [des, setDes] = useState('');

    const onChange = (e) => {
        if (e.target.name === 'groupname') {
            setGroupName(e.target.value);
        }
        if (e.target.name === 'des') {
            setDes(e.target.value);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        createGroup({
            description: des,
            name: groupname,
        });
    };

    const onClick = () => {
        //setIsEdit(false);
    };

    return (
        <div className="NewGroup">
            <h1>
                <a
                    style={{
                        color: '#ffc83d',
                        fontSize: 'min(6vw, 100px)',
                        textAlign: 'center',
                    }}
                >
                    New Group
                </a>
                <p className="line"></p>
            </h1>
            <form onSubmit={onSubmit}>
                <div>
                    <h1
                        style={{
                            fontSize: 'min(6vw, 40px)',
                            textAlign: 'center',
                        }}
                    >
                        <input
                            placeholder="그룹명"
                            name="groupname"
                            value={groupname}
                            type="text"
                            onChange={onChange}
                        />
                    </h1>
                    <h1
                        style={{
                            fontSize: 'min(6vw, 40px)',
                            textAlign: 'center',
                        }}
                    >
                        그룹 리더: {auth.user.name}
                    </h1>
                </div>

                <div>
                    <h1
                        style={{
                            fontSize: 'min(6vw, 40px)',
                            textAlign: 'center',
                        }}
                    >
                        <input
                            placeholder="description"
                            name="des"
                            value={des}
                            type="text"
                            onChange={onChange}
                        />
                    </h1>
                </div>
                <div>
                    <input type="submit" value="추가하기" />
                </div>
            </form>
            <div>
                <button onClick={onClick}>cancel</button>
            </div>
        </div>
    );
}

export default NewGroup;

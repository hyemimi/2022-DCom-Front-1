import { useParams } from 'react-router-dom';

const GroupInfo = () => {
    const { id } = useParams();

    return <div>그룹페이지</div>;
};

export default GroupInfo;

import { Link } from 'react-router-dom'

const menuList = [
  { ref: '', label: '🏠　홈' },
  { ref: 'searchFriend', label: '🔍　친구 검색하기' },
  { ref: 'searchGroup', label: '🔍　그룹 검색하기' },
  { ref: 'record', label: '📈　분석하기' },
  { ref: 'friends', label: '🧾　친구 리스트' },
  { ref: 'groups', label: '🧾　내 그룹리스트' }
]

const SideMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className="SideMenu">
        {menuList.map(({ label, ref }) => (
            <Link
                key={ref}
                to={ref}>
                <button>{label}</button>
            </Link>
        ))}

      <div className="copyright">© DCOM. All Rights Reserved.</div>
    </div>
  )
}

export default SideMenu


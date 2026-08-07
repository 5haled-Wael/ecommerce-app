import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  const navItems = [
    { route: '/add', image: assets.add_icon, title: 'Add Item' },
    { route: '/list', image: assets.order_icon, title: 'List Items' },
    { route: '/orders', image: assets.order_icon, title: 'Orders' },
  ];

  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className=" flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        {navItems.map((item) => (
          <NavLink
            key={item.title}
            className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
            to={item.route}
          >
            <img src={item.image} className="w-5 h-5" alt="" />
            <p className="hidden md:block">{item.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

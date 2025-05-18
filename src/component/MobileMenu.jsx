import React from 'react';

export default function MobileMenu({ isOpen, toggleMenu }) {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-md`}>
      <ul className="px-4 pb-4 space-y-2 text-gray-700">
        <li><a href="#" className="block hover:text-indigo-600">Trang chủ</a></li>
        <li><a href="#" className="block hover:text-indigo-600">Sản phẩm</a></li>
        <li><a href="#" className="block hover:text-indigo-600">Folder</a></li>
        <li><a href="#" className="block hover:text-indigo-600">Liên hệ</a></li>
      </ul>
    </div>
  );
}

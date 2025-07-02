import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #2a2a2a;
  padding: 20px;
  color: #fff;
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <MenuItem>Trang chủ</MenuItem>
      <MenuItem>Bảng xếp hạng</MenuItem>
      <MenuItem>Chủ đề vả thể loại</MenuItem>
      <MenuItem>Thư viện</MenuItem>
    </SidebarContainer>
  );
}

export default Sidebar;
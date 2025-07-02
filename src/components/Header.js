import React from 'react';
import styled from 'styled-components';
import { FaMusic } from 'react-icons/fa';

const HeaderContainer = styled.div`
  padding: 10px 20px;
  background-color: #ff4500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const SearchBar = styled.input`
  padding: 5px;
  width: 200px;
  border: none;
  border-radius: 5px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <FaMusic /> <span style={{ marginLeft: '10px' }}>laomusic</span>
      </Logo>
      <SearchBar placeholder="Bạn muốn nghe gì" />
      <div>Đăng nhập</div>
    </HeaderContainer>
  );
}

export default Header;
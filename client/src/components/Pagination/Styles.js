import styled from 'styled-components';

// 남색: #1D3561

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

export const Button = styled.button`
  border: none;
  padding: 3px 8px;
  margin: 0;
  color: #1d3561;
  font-size: 16px;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    color: #fff;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    color: #efac59;
    font-weight: bold;
    cursor: revert;
    transform: revert;
    border-bottom: 2px solid #1d3561;
  }
`;

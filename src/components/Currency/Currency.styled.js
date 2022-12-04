import styled from 'styled-components';
import { device } from 'stylesheet/breakpoints';
import SVG from 'react-inlinesvg';

export const Box = styled.div`
  position: relative;
  display: inline-block;
  width: 280px;
  height: 197px;
  overflow: hidden;
  background-color: var(--active-bg-color);
  border-radius: 30px;

  @media ${device.tablet} {
    width: 336px;
  }

  @media ${device.desktop} {
    width: 393px;
    height: 226px;
  }
`;

export const Table = styled.table`
  width: 100%;
  height: 174px;
  border-spacing: 20px solid var(--active-bg-color);

  border-radius: 30px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  line-height: 1.5;

  background-color: var(--active-bg-color);
  color: var(--white);

  @media ${device.tablet} {
    height: 174px;
    margin: 0;
    border-bottom: 12px solid var(--active-bg-color);
  }

  @media ${device.desktop} {
    margin: 0;
    width: 393px;
    border-spacing: 40px solid var(--active-bg-color);
    border-bottom: 1px solid var(--active-bg-color);
  }
`;

export const Thead = styled.thead`
  font-weight: 700;
  font-size: 18px;
  background-color: var(--disable-bg-color);
`;

export const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;

  @media ${device.desktop} {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const Tbody = styled.tbody`
  height: 100%;
  font-weight: 400;
  font-size: 16px;

  background-color: var(--active-bg-color);
`;

export const LoadBox = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const Td = styled.td`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;

  @media ${device.desktop} {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 40px;
  }
`;

export const Tr = styled.tr`
  border: 0;
`;
export const Btn = styled.button`
  background-color: var(--disable-bg-color);
  border: 0;
  padding: 2px 8px 2px 30px;
  color: #fff;
  border-top-right-radius: 3px;
  cursor: pointer;
`;
export const TableIcon = styled(SVG)`
  position: absolute;
  bottom: 0;
`;

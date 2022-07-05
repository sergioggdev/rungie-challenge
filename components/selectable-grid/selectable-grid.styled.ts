import styled from '@emotion/styled';

export const Card = styled.div<{ maxSize: number }>`
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  width: ${({ maxSize }) => maxSize}px;
  height: ${({ maxSize }) => maxSize}px;
  ${({ theme }) => theme.elevation.card}
`;

export const GridArea = styled.div<{ rows: number; columns: number }>`
  display: grid;
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  justify-items: stretch;
  align-items: stretch;
  gap: 1% 1%;
  width: 100%;
  height: 100%;
`;

export const TouchableComponent = styled.div<{ enable?: boolean; selected?: boolean }>`
  border-radius: 20%;
  background-color: ${({ theme, enable }) => (enable ? theme.color.red : theme.color.green)};
  ${({ theme, selected }) => selected && `background-color: ${theme.color.blue}`}
`;

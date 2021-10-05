import { styled } from 'linaria/react';
import { PUITheme } from 'utils/types';

export const StyledFirstDisableOption = styled.div<{
  theme: PUITheme;
}>`
  color: ${(props: any): string => props.theme.colors.secondary};
  background-color: ${(props: any): string => props.theme.colors.border};
  padding: 18px 0 18px 25px;
`;

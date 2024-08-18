import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { UsersThree } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity as TouchableOpacityProps)`
    width: 100%;
    height: 90px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    margin-bottom: 12px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `};
`;

export const Icon = styled(UsersThree).attrs(({ theme }): {} => ({
  size: 32,
  weight: theme.ICON.FILL,
  color: theme.COLORS.GREEN_700,
}))`
    margin-right: 20px;
`;

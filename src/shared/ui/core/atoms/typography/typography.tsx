import styled, { css } from "styled-components";
import { TypographyVariants } from "../../../theme/types";

type TTypographyProps = {
  variant?: TypographyVariants;
};

export const Typography = styled.div<TTypographyProps>`
  ${({ theme: { typography, palette }, variant = "title" }) => css`
    font-family: ${typography[variant].fontFamily};
    letter-spacing: ${typography[variant].letterSpacing};
    font-size: ${typography[variant].size};
  `}
`;

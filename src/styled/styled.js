import { css } from "styled-components";

export const flexMixin = (
    direction = 'row',
    justify = 'start',
    align = 'stretch',
    gap = 0,
    wrap = 'nowrap'
) => {
    return css`
    display: flex;
    flex-direction :${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
    `
}


export const fontMixin = (size, weight = 400) => css`
font-size: ${size};
font-weight: ${weight};
`

export const tagColor =" #d7fa00";

export const gray = "rgb(160, 160, 160)";



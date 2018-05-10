import styled from 'styled-components'

export default styled.div`
  margin-top: ${({ theme, mTop }) => theme.sizes[mTop] || 0};
  margin-bottom: ${({ theme, mBottom }) => theme.sizes[mBottom] || 0};
  margin-left: ${({ theme, mLeft }) => theme.sizes[mLeft] || 0};
  margin-right: ${({ theme, mRight }) => theme.sizes[mRight] || 0};
  ${({ theme, center, width }) =>
    center &&
    `
    margin-left: auto;
    margin-right: auto;
    max-width: ${
      width ? theme.sizes.wrappers[width] : theme.sizes.wrappers['regular']
    };
  `};
  ${({ flex }) => flex && `display: flex;`};
  ${({ align }) => align && `flex-direction: ${align}`};
`

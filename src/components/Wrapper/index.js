import styled from 'styled-components'

export default styled.div`
  display: flex;
  margin-top: ${({ mTop }) => mTop || 0};
  margin-bottom: ${({ mBottom }) => mBottom || 0};
  margin-left: ${({ mLeft }) => mLeft || 0};
  margin-right: ${({ mRight }) => mRight || 0};
  ${({ theme, center, width }) =>
    center &&
    `
    margin-left: auto;
    margin-right: auto;
    max-width: ${
      width ? theme.sizes.wrappers[width] : theme.sizes.wrappers['regular']
    };
  `};
`

import React from 'react';
const SvgrMock = React.forwardRef((props, ref) => (
  <div>
    <span ref={ref} {...props} />
    <span ref={ref} {...props} />
  </div>
));
export const ReactComponent = SvgrMock;
export default SvgrMock;

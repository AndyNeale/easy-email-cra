import { Tooltip, TooltipProps } from '@arco-design/web-react';
import { IconQuestionCircle } from '@arco-design/web-react/icon';

export function Help(
  props: TooltipProps & Partial<{ style: Partial<React.CSSProperties> }>
) {
  return (
    <Tooltip {...{ ...props, style: undefined }}>
      <IconQuestionCircle style={props.style} />
    </Tooltip>
  );
}

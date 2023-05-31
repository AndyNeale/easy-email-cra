import { Stack } from 'packages/easy-email-editor/components/UI/Stack';

import { IconFont } from 'packages/easy-email-editor/components/IconFont';
import { Button } from 'packages/easy-email-editor/components/UI/Button';
import { useBlock } from 'packages/easy-email-editor/hooks/useBlock';

export function ToolsPanel() {
  const { redo, undo, redoable, undoable } = useBlock();

  return (
    <Stack>
      <Button title={t('undo')} disabled={!undoable} onClick={undo}>
        <IconFont
          iconName="icon-undo"
          style={{
            cursor: 'inherit',
            opacity: undoable ? 1 : 0.75,
          }}
        />
      </Button>

      <Button title={t('redo')} disabled={!redoable} onClick={redo}>
        <IconFont
          iconName="icon-redo"
          style={{
            cursor: 'inherit',
            opacity: redoable ? 1 : 0.75,
          }}
        />
      </Button>
      <Stack.Item />
    </Stack>
  );
}

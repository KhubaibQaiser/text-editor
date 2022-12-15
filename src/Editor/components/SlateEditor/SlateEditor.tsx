import * as React from 'react';
import {
  withReact,
  Slate,
  Editable,
  RenderElementProps,
  RenderLeafProps,
} from 'slate-react';
import { createEditor } from 'slate';
import { iSlateEditorProps } from './types';
import { EditableElement } from '../EditableElement';
import { EditableLeaf } from '../EditableLeaf';
import { withHistory } from 'slate-history';

const SlateEditor: React.VFC<iSlateEditorProps> = ({ value, onChange }) => {
  const [editor] = React.useState(() => withHistory(withReact(createEditor())));

  const renderElement = React.useCallback(
    (props: RenderElementProps) => <EditableElement {...props} />,
    []
  );

  const renderLeaf = React.useCallback(
    (props: RenderLeafProps) => <EditableLeaf {...props} />,
    []
  );

  return (
    <Slate editor={editor} value={value} onChange={onChange}>
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
    </Slate>
  );
};

export default SlateEditor;

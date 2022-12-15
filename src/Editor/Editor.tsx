import * as React from 'react';
import { SlateEditor } from './components';
import { Descendant } from 'slate';

const initialValue: Descendant[] = [
  { type: 'heading-one', children: [{ text: 'Heading 1 Text' }] },
  { type: 'heading-two', children: [{ text: 'Heading 2 Text' }] },
  { type: 'code-block', children: [{ text: 'Code block' }] },
  {
    type: 'paragraph',
    children: [
      { text: 'This is an editable ' },
      { text: 'rich text ', bold: true },
      { text: 'paragraph.' },
    ],
  },
];

const Editor = () => {
  const [value, setValue] = React.useState(initialValue);

  return (
    <div className="d-flex f-col items-center mt-16">
      <SlateEditor value={value} onChange={setValue} />
    </div>
  );
};

export default Editor;

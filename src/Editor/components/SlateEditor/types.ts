import { Descendant } from 'slate';

export interface iSlateEditorProps {
  value: Descendant[];
  onChange?: (value: Descendant[]) => void;
}

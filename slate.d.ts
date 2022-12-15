// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';

export type ElementTypes =
  | 'paragraph'
  | 'heading-one'
  | 'heading-two'
  | 'code-block';
type CustomElement = { type: ElementTypes; children: CustomText[] };
type CustomText = {
  text: string;
  bold?: true;
  code?: boolean;
  italic?: boolean;
  underline?: boolean;
};

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

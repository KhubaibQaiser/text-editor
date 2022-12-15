import { RenderElementProps } from 'slate-react';

const EditableElement = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  switch (element.type) {
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'code-block':
      return (
        <pre {...attributes}>
          <code className="codeBlock">{children}</code>
        </pre>
      );
    default:
      return <div {...attributes}>{children}</div>;
  }
};

export default EditableElement;

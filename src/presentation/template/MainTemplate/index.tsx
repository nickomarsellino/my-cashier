interface DefaultProps {
  children?: JSX.Element;
}

const MainTemplate = ({ children }: DefaultProps) => {
  return (
    <div>
      <p>HEADER</p>
      <div>{children}</div>
      <p>FOOTER</p>
    </div>
  );
};

export default MainTemplate;

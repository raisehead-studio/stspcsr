import "./style.scss";

export default function ListItem(props: {
  title: string;
  date: string;
  link: string;
}) {
  const { title, date, link } = props;

  return <div className="list_item_container"></div>;
}

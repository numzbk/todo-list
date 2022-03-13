import "./styles.css";

export default function ShowImage({ url }) {
  return <img className="m-auto" height={100} src={url} />;
}

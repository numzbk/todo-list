import { useContext } from "react";
import { GlobalContext } from "./globalContext";
import ShowImage from "./showImage";

export default function DogTable() {
  const { list, setList } = useContext(GlobalContext);

  // ลบรูปตาม index ที่ส่งเข้ามา
  const removeList = (index) => {
    console.log(index, list.length);
    if (list && list.length !== 1) {
      const temp = [...list];
      temp.splice(index, 1);
      setList([...temp]);
    } else {
      setList(null);
    }
  };

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>ลำดับ</th>
          <th>ชื่อหมา</th>
          <th>บันทึกโดย</th>
          <th>ภาพ</th>
          <th>ลบ</th>
        </tr>
      </thead>
      <tbody>
        {list &&
          list.map((value, key) => {
            return (
              <tr key={key}>
                <td align="center">{key + 1}</td>
                <td align="center">{value.name}</td>
                <td align="center">{value.username}</td>
                <td align="center">
                  <ShowImage url={value?.url} />
                </td>
                <td align="center">
                  <button onClick={() => removeList(key)}>ลบ</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

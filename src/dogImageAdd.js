import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./globalContext";
import ShowImage from "./showImage";
import "./styles.css";

export default function DogImageAdd() {
  // ค่าปัจจุบันของรูปหมา
  const [img, setImg] = useState(null);
  // ประกาศตัวแปรสำหรับชื่อหมา
  const [name, setName] = useState("");
  // ประกาศตัวแปร Global ที่ใช้ Context
  const { list, setList, username } = useContext(GlobalContext);

  // สำหรับ โหลดข้อมูลภาพหมาใหม่
  const getImg = async () => {
    const {
      data: { message }
    } = await axios.get("https://dog.ceo/api/breeds/image/random");
    setImg(message);
  };

  // สำหรับ เพิ่มข้อมูล ใน list
  const addList = (e) => {
    e.preventDefault();
    if (!list) {
      // กรณีไม่มีข้อมูล
      setList([{ name: name, url: img, username: username }]);
    } else {
      // กรณีมีข้อมูลอย่างน้อย 1
      setList([...list, { name: name, url: img, username: username }]);
    }
    // ให้โหลดรูปใหม่
    getImg();
  };

  // สำหรับ default value ให้กับ img
  useEffect(() => {
    // ถ้า img มีข้อมูลอยู่แล้วไม่ต้องโหลดภาพใหม่
    if (!img) {
      getImg();
    }
  }, [img]);

  return (
    <div>
      <div className="layout-img">
        <h1 className="m-auto">ภาพน้องหมา</h1>
        <div className="m-auto">
          <button onClick={() => getImg()}>โหลดภาพใหม่</button>
        </div>
        <ShowImage url={img} />
        <form className="m-auto" style={{ maxWidth: 200 }} onSubmit={addList}>
          <input
            placeholder="ชื่อน้องหมา"
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <div className="m-auto">
          <button onClick={addList}>บันทึก</button>
        </div>
      </div>
    </div>
  );
}

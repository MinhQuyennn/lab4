import { useEffect, useState } from "react";
import request from "react5/services/request";
import "./style.scss";

const React5 = () => {
  const { getAvatar } = request();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    getAvatar()
      .then((res) => {
        setAvatar(res[0]);
      })
      .catch((err) => {
        console.log("lỗi", err);
      });
  }, []);

  return (
    <div className="react5">
      {!avatar ? null : (
        <>
          <div className="title">Thể loại</div>
          <ul className="list-group">
            {avatar.genres.map((item) => (
              <li className="list-group-item">{item}</li>
            ))}
          </ul>
          <hr />
          <div className="title">Tóm tắt</div>
          <div> {avatar.synopsis}</div>
          <hr />
          <div className="title">Năm phát sóng</div>
          <div> {avatar.yearsAired}</div>
          <hr />
        </>
      )}
    </div>
  );
};

export default React5;

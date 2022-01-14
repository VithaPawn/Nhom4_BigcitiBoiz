import React from "react";
import InputForm from "./InputForm";

function PopupForm({ value }) {
  return (
    <div className="text-center">
      <h2>Chia sẻ cuộc vote mới của bạn</h2>
      <p className="text_p">
        Hãy sao chép đường liên kết rồi gửi đến những người mà bạn muốn tham gia
        cùng. Đừng quên lưu lại để có thể sử dụng sau.
      </p>
      <div className="coppy_input">
        <InputForm type="text" value={value} disabled="disabled" />
        <button className="btn_coppy">
          <img
            src="https://cdn-icons-png.flaticon.com/512/60/60990.png"
            className="img_coppy"
          />
        </button>
      </div>
    </div>
  );
}

export default PopupForm;

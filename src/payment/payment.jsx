import React, { useState } from "react";
import "./payment.css";

const Payment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    // Thực hiện xử lý thanh toán tại đây
    console.log("Thanh toán thành công!");
  };

  return (
    <div className="payment-container">
      <h2>Thông tin thanh toán</h2>
      <div className="payment-form">
        <input
          type="text"
          placeholder="Họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Số thẻ tín dụng"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ngày hết hạn (MM/YYYY)"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <input
          type="text"
          placeholder="Địa chỉ giao hàng"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Chọn phương thức thanh toán</option>
          <option value="cash">Tiền mặt</option>
          <option value="card">Thẻ</option>
        </select>
        <button onClick={handlePayment}>Thanh toán</button>
      </div>
    </div>
  );
};

export default Payment;
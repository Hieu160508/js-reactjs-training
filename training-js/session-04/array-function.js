// Đề bài: Thống kê doanh thu cửa hàng
// Dữ liệu:

// js

const orders = [
  {
    id: "OD001", customer: "An", status: "completed",
    items: [
      { sku: "A1", name: "Bàn phím", category: "tech",   price: 800000, qty: 2 },
      { sku: "B2", name: "Sách JS",  category: "book",   price: 150000, qty: 3 }
    ]
  },
  {
    id: "OD002", customer: "Bình", status: "cancelled",
    items: [
      { sku: "A1", name: "Bàn phím", category: "tech",   price: 800000, qty: 1 }
    ]
  },
  {
    id: "OD003", customer: "An", status: "completed",
    items: [
      { sku: "C3", name: "Chuột",   category: "tech",   price: 300000, qty: 4 },
      { sku: "B2", name: "Sách JS", category: "book",   price: 150000, qty: 1 }
    ]
  },
  {
    id: "OD004", customer: "Chi", status: "completed",
    items: [
      { sku: "D4", name: "Tai nghe", category: "tech",   price: 1200000, qty: 1 },
      { sku: "E5", name: "Bút",      category: "office", price: 20000,  qty: 10 }
    ]
  }
];
// Yêu cầu: viết hàm analyze(orders) trả về đúng object dưới đây.
// Luật tính:

// 1. Chỉ tính các đơn có status === "completed"..
// 2. subtotal của một đơn = tổng price * qty của các item trong đơn..
// 3. Chiết khấu bậc thang theo từng đơn: subtotal >= 2_000_000 → giảm 10%; >= 1_000_000 → giảm 5%; còn lại → 0%..
// 4. totalRevenue là tổng tiền sau chiết khấu; byCategory tính trên tiền trước chiết khấu..
// 5. topCustomer xét theo tổng tiền sau chiết khấu của khách đó..
// 6. bestSeller xét theo tổng qty bán ra; nếu hòa qty thì chọn sku có doanh thu (trước chiết khấu) cao hơn..
// Ràng buộc (phần khó nằm ở đây):

// • Chỉ được dùng map, filter, reduce, Object.entries/values/keys. Cấm for, while, forEach, cấm biến đếm bên ngoài, cấm push..
// • Không dùng flat / flatMap — phải tự gộp mảng lồng bằng reduce..

////Output mong đợi:

js

// {
//   totalRevenue: 4457500,
//   byCategory: { tech: 4000000, book: 600000, office: 200000 },
//   topCustomer: { name: "An", spent: 3127500 },
//   bestSeller:  { sku: "E5", name: "Bút", qty: 10 }
// }
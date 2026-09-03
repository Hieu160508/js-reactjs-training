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


// {
//   totalRevenue: 4457500,
//   byCategory: { tech: 4000000, book: 600000, office: 200000 },
//   topCustomer: { name: "An", spent: 3127500 },
//   bestSeller:  { sku: "E5", name: "Bút", qty: 10 }
// }

function analyze(orders) {
  const completed = orders.filter(o => o.status === "completed");
  // console.log(completed); // Loc don da hoan thanh

  const enrichedOrders = completed.map(order => {
    const subtotal = order.items.reduce(
      (sum, item) => sum + item.price * item.qty, 0 
    );  // Tinh subtotal cua don hang

    const discountRate = 
      subtotal >= 2_000_000 ? 0.1 :
      subtotal >= 1_000_000 ? 0.05 : 0; // Xac dinh muc giam gia theo subtotal
      
    const total = subtotal * (1 - discountRate);  // Tinh total sau khi giam gia

    return { ...order, subtotal, total };

  });
  // console.log(enrichedOrders); 

  const totalRevenue = enrichedOrders.reduce((sum, order) => sum + order.total, 0); // Tinh tong doanh thu
  // console.log(totalRevenue);

  const allItems = enrichedOrders.reduce((acc, order) => [...acc, ...order.items], []);
  // console.log(allItems); // Gop tat ca cac item trong cac don hang

  const byCategory = allItems.reduce((acc, item) => {
    const amount = item.price * item.qty;
    return { ...acc, [item.category]: (acc[item.category] || 0) + amount };
  } , {});
  // console.log(byCategory); // Tinh tong tien theo category

  const statsBySku = allItems.reduce((acc, item) => {
    const prev = acc[item.sku] || { sku: item.sku, name: item.name, qty: 0, revenue: 0 };
    return {
      ...acc,
      [item.sku]: {
        ...prev,
        qty: prev.qty + item.qty,
        revenue: prev.revenue + item.price * item.qty
      }
    };
  }, {});
  // console.log(statsBySku); // Thong ke theo sku
  
  const bestSellerFull = Object.values(statsBySku).reduce((best, curr) => {
    if (!best) return curr;
    if (curr.qty > best.qty) return curr;
    if (curr.qty === best.qty && curr.revenue > best.revenue) return curr;
    return best;
  }, null);
  const bestSeller = { sku: bestSellerFull.sku, name: bestSellerFull.name, qty: bestSellerFull.qty };
  // console.log(bestSeller); // Tim best seller theo quy tac

  const spentByCustomer = enrichedOrders.reduce((acc, order) => {
    return { ...acc, [order.customer]: (acc[order.customer] || 0) + order.total };
  }, {});
  // console.log(spentByCustomer); // Tinh tong tien da chi cua tung khach hang

  const topCustomer = Object.entries(spentByCustomer).reduce((top, [name, spent]) => {
    if (!top || spent > top.spent) return { name, spent };
    return top;
  }, null);
  // console.log(topCustomer); // Tim khach hang chi tieu nhieu nhat

  return { totalRevenue, byCategory, topCustomer, bestSeller };

}
console.log(analyze(orders)); // Goi ham analyze va in ra ket qua

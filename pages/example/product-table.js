// 導入時就自動轉為JS資料格式
import products from '@/data/Product.json';

// 導入css module定義的樣式檔案(.moudle.css)，導入後styles會是一個物件值
import styles from '@/styles/product-table.module.css';

export default function ProductTable() {
  return (
    <>
      <table className={styles['my-table']}>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {/* v是每個商品的物件值 */}
          {products.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>
                  <img src={`/pics/${v.photos.split(',')[0]}`} alt="" />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

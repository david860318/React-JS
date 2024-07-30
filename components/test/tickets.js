import { React, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlinePostAdd } from 'react-icons/md';
import AddModel from './add-modal';
import styles from '@/styles/tickets.module.css';

export default function Tickets() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // 你可以根据实际情况动态计算总页数

  const [modalVisible, setModalVisible] = useState(false);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);
  return (
    <>
      <div className={styles.containerStyle}>
        <div className={styles.titleStyle}>
          <h1>客服單列表</h1>
          <a
            href="#"
            className={styles.addTicket}
            onClick={(e) => {
              e.preventDefault();
              handleOpenModal();
            }}
          >
            <MdOutlinePostAdd className={styles.addTicketIcon} />
          </a>
        </div>

        <div>
          <div>
            <Table striped bordered hover className={styles.tableStyle}>
              <thead className={styles.theadStyle}>
                <tr>
                  <th>客服單編號</th>
                  <th>訂單編號</th>
                  <th>問題分類</th>
                  <th>問題說明</th>
                  <th>建立時間</th>
                  <th>檢視狀態</th>
                  <th>查看詳細</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tdStyle}>
                  <td>00001</td>
                  <td>AA000123</td>
                  <td>營地相關</td>
                  <td>環境髒亂...</td>
                  <td>2024/07/09</td>
                  <td>待回覆</td>
                  <td>
                    <a href="" className={styles.iconLink}>
                      <IoEyeOutline className={styles.icon} />
                    </a>
                  </td>
                </tr>
                <tr className={styles.tdStyle}>
                  <td>00001</td>
                  <td>AA000123</td>
                  <td>營地相關</td>
                  <td>環境髒亂...</td>
                  <td>2024/07/09</td>
                  <td>待回覆</td>
                  <td>
                    <a href="" className={styles.iconLink}>
                      <IoEyeOutline className={styles.icon} />
                    </a>
                  </td>
                </tr>
                <tr className={styles.tdStyle}>
                  <td>00001</td>
                  <td>AA000123</td>
                  <td>營地相關</td>
                  <td>環境髒亂...</td>
                  <td>2024/07/09</td>
                  <td>待回覆</td>
                  <td>
                    <a href="" className={styles.iconLink}>
                      <IoEyeOutline className={styles.icon} />
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className={styles.pagination}>
          <button
            className={`${styles.pageItem} ${
              currentPage === 1 ? styles.disabled : ''
            }`}
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`${styles.pageItem} ${
                currentPage === index + 1 ? styles.active : ''
              }`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`${styles.pageItem} ${
              currentPage === totalPages ? styles.disabled : ''
            }`}
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      </div>
      <AddModel show={modalVisible} handleClose={handleCloseModal} />
    </>
  );
}

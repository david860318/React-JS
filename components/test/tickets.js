import { React, useState } from 'react';
import Table from 'react-bootstrap/Table';
import styles from '@/styles/tickets.module.css';

// icons
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlinePostAdd } from 'react-icons/md';
import { MdOutlineFactCheck } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function Tickets() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  // 彈出視窗
  const [showModal, setShowModal] = useState(false);
  const [showNestedModal, setShowNestedModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // 處理表單提交
    console.log('表單已提交');
    setShowModal(false); // 提交後關閉彈出視窗
  };

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleNestedModalClick = () => {
    setShowNestedModal(true);
  };

  const handleNestedModalClose = () => {
    setShowNestedModal(false);
  };

  return (
    <>
      <div className={styles.containerStyle}>
        <div className={styles.titleStyle}>
          客服單列表
          <button
            href="#"
            className={styles.addTicket}
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
            <MdOutlinePostAdd className={styles.addTicketIcon} />
          </button>
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
                  <td className={styles.CsDescription}>環境髒亂...</td>
                  <td>2024/07/09</td>
                  <td className={styles.CsState}>
                    <div className={styles.CsState1}>待回覆</div>
                  </td>
                  <td>
                    <button href="" className={styles.checkBg}>
                      <IoEyeOutline className={styles.checkIcon} />
                    </button>
                  </td>
                </tr>
                <tr className={styles.tdStyle}>
                  <td>00001</td>
                  <td>AA000123</td>
                  <td>營地相關</td>
                  <td className={styles.CsDescription}>環境髒亂...</td>
                  <td>2024/07/09</td>
                  <td className={styles.CsState}>
                    <div className={styles.CsState2}>處理中</div>
                  </td>
                  <td>
                    <button href="" className={styles.checkBg}>
                      <IoEyeOutline className={styles.checkIcon} />
                    </button>
                  </td>
                </tr>
                <tr className={styles.tdStyle}>
                  <td>00001</td>
                  <td>AA000123</td>
                  <td>營地相關</td>
                  <td className={styles.CsDescription}>環境髒亂...</td>
                  <td>2024/07/09</td>
                  <td className={styles.CsState}>
                    <div className={styles.CsState3}>已處理</div>
                  </td>
                  <td>
                    <button href="" className={styles.checkBg}>
                      <IoEyeOutline className={styles.checkIcon} />
                    </button>
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

      {/* 彈出視窗 */}
      {showModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <div className={styles.modalClose}>
              <button
                className={styles.closeButton}
                onClick={() => setShowModal(false)}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formTitle}>聯絡我們</div>
              <div className={styles.formGroup}>
                <div className={styles.formQus}>
                  <label htmlFor="ticketEmail">電子郵件*</label>
                  <input
                    className={styles.formInput}
                    type="email"
                    placeholder="請輸入您的Email"
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.formQus}>
                  <label htmlFor="ticketPhone">連絡電話*</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    maxLength="11"
                    pattern="09\d{8}"
                    placeholder="請輸入您的電話"
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.formQus}>
                  <label htmlFor="ticketOrderNum">訂單編號</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="請輸入或選擇您的訂單編號"
                  />
                  <div
                    className={styles.checkBg}
                    onClick={handleNestedModalClick}
                    role="button"
                    tabIndex={0} // 使 div 成為可聚焦的元素
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleNestedModalClick();
                      }
                    }}
                  >
                    <MdOutlineFactCheck className={styles.checkIcon} />
                  </div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.formQus}>
                  <label htmlFor="ticketCategory">問題分類*</label>
                  <select className={styles.formInput} required>
                    <option className={styles.optionTextDefault} value="">
                      請輸入或選擇您的訂單編號
                    </option>
                    <option value="option1">營地相關</option>
                    <option value="option2">用品租借相關</option>
                    <option value="option3">費用相關</option>
                    <option value="option4">網站操作相關</option>
                    <option value="option5">其他</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroupExplain}>
                <div className={styles.formQusExplain}>
                  <label htmlFor="ticketOrderNum">問題說明*</label>
                  <textarea
                    className={styles.formInputExplain}
                    id="description"
                    name="description"
                    placeholder="請詳細敘述問題"
                    required
                  ></textarea>
                </div>
              </div>
              <div className={styles.submitGroup}>
                <div className={styles.submitDiv}>
                  <button type="submit" className={styles.submitButton}>
                    提交
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 嵌套彈出視窗 */}
      {showNestedModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <div className={styles.modalClose}>
              <button
                className={styles.closeButton}
                onClick={handleNestedModalClose}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <div className={styles.nestedModalContent}>
              <h2>嵌套視窗標題</h2>
              <p>這是嵌套彈出視窗的內容。</p>
              <button
                className={styles.submitButton}
                onClick={handleNestedModalClose}
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { React, useState } from 'react';
import Table from 'react-bootstrap/Table';
import styles from '@/styles/tickets.module.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

// icons
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlinePostAdd } from 'react-icons/md';
import { MdOutlineFactCheck } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { FaCalendarCheck } from 'react-icons/fa';
import { MdOutlineLowPriority } from 'react-icons/md';

export default function Tickets() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  // 彈出視窗
  const [showModal, setShowModal] = useState(false);
  const [showNestedModal, setShowNestedModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

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
        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </div>

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
                    <button
                      href=""
                      className={styles.checkBg}
                      onClick={() => setShowDetailModal(true)}
                    >
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

      {/* 新增客服單 */}
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
                      請選擇問題分類
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

      {/* 選擇訂單編號 */}
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
            <div className={styles.ticketOrderNum}>
              <div className={styles.formTitle}>選擇訂單</div>
              <Table striped bordered hover className={styles.orderNumTable}>
                <thead className={styles.orderThead}>
                  <tr>
                    <th>訂單編號</th>
                    <th>訂單成立時間</th>
                    <th>交易金額</th>
                    <th>選擇訂單</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.orderTr}>
                    <td>AA000123</td>
                    <td>2024/07/09</td>
                    <td>$ 5,000</td>
                    <td>
                      <button href="" className={styles.checkBg}>
                        <FaCalendarCheck className={styles.checkOrder} />
                      </button>
                    </td>
                  </tr>
                  <tr className={styles.orderTr}>
                    <td>AA000123</td>
                    <td>2024/07/09</td>
                    <td>$ 5,000</td>
                    <td>
                      <button href="" className={styles.checkBg}>
                        <FaCalendarCheck className={styles.checkOrder} />
                      </button>
                    </td>
                  </tr>
                  <tr className={styles.orderTr}>
                    <td>AA000123</td>
                    <td>2024/07/09</td>
                    <td>$ 5,000</td>
                    <td>
                      <button href="" className={styles.checkBg}>
                        <FaCalendarCheck className={styles.checkOrder} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div className={styles.submitGroup}>
                <div className={styles.submitDiv}>
                  <button
                    className={styles.backButton}
                    onClick={handleNestedModalClose}
                  >
                    <MdOutlineLowPriority className={styles.backIcon} />
                    返回
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 查看詳細頁 */}
      {showDetailModal && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <div className={styles.modalClose}>
              <button
                className={styles.closeButton}
                onClick={() => setShowDetailModal(false)}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formTitle}>客服單詳細資料</div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="ticketEmail">客服單編號</label>
                  <div className={styles.DetailContent}>00001</div>
                </div>
              </div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="ticketPhone">訂單編號</label>
                  <div className={styles.DetailContent}>00001</div>
                </div>
              </div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="ticketOrderNum">問題分類</label>
                  <div className={styles.DetailContent}>00001</div>
                </div>
              </div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="ticketCategory">建立時間</label>
                  <div className={styles.DetailContent}>00001</div>
                </div>
              </div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="ticketOrderNum">客服單狀態</label>
                  <div className={styles.DetailContent}>00001</div>
                </div>
              </div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="ticketOrderNum">客服回覆</label>
                  <div className={styles.DetailContent}>00001</div>
                </div>
              </div>
              <div className={styles.formDetail}>
                <div className={styles.formDetailContent}>
                  <label htmlFor="ticketOrderNum">回覆時間</label>
                  <div className={styles.DetailContent}>00001</div>
                </div>
              </div>
              <div className={styles.submitGroup}>
                <div className={styles.submitDiv}>
                  <button
                    className={styles.backButton}
                    onClick={() => setShowDetailModal(false)}
                  >
                    <MdOutlineLowPriority className={styles.backIcon} />
                    返回客服單列表
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
